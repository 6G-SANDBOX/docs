---
sidebar_position: 2
title: "Playbook Deployment Guide"
sidebar_label: "Playbook Deployment Guide"
draft: false
---

We strongly advise to start development from a copy of `.dummy_component/`, reading the insightful comments and modifying the playbook as you desire. We also suggest leaving the `.tnlcm/` files to the end, as you will discover during development if you need more or less variables from the experimenter.

This guide contemplates 2 families of deployments:
- Based on a VM Deployment
- Based on a Helm Chart (depends on a previously deployed OneKE)

Any playbook can be structured as you wish, but we do believe most components can start from one of these approaches

## Based on a VM Deployment

Examples of components based on VM deployments are the ueransim, vm_kvm, the aforementioned .dummy_component, or even tn_bastion/tn_init

These components can be structured in 4 different stages. These stages are separated with [Ansible plays](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html) to improve logical segmentation and gain readability, but as you may realize, if two consecutive stages have the same hosts (localhost) there is no need to add new ones.
Remember these are just suggested stages, your component deployment might not fit into these and you can add and remove whichever you want.

You can complete any STAGE with your own task files. Just drop them at `{{ component_type }}/code/{{ site_hypervisor }}/cac/` and import them from the main playbook. In components with a lot of custom files, we suggest including subdirectories such as `01_pre` (for preparation and deployment stages), `02_install` (for configuration stages) and `03_post` (for result publishing stages). These subdirectory names are "legacy" from previous stages of the 6G-Library so you can freely use other names.

### STAGE 1: Apply IaC to deploy the component

These stage includes all pre-deployment tasks as well as the actual deployment. Usual steps include
- Importing task file `.global/cac/load_variables.yaml`: Import variables as hostvars into the playbook. Previously mentioned in the landing page [EXTRA section](https://github.com/6G-SANDBOX/6G-Library/wiki#extra)
- Importing task file `.global/cac/terraform_workdir.yaml`: Prepares directory `.terraform` in the Jenkins workspace, which will serve as the Terraform workspace. Sets the [.tfstate backend as S3](https://developer.hashicorp.com/terraform/language/settings/backends/s3) (MinIO) and downloads the manifests of previous components.
- Importing task file `.global/cac/terraform_apply.yaml`: Prepares the corresponding [terraform manifests](https://registry.terraform.io/providers/OpenNebula/opennebula/latest/docs/resources/virtual_machine), applies the `terraform apply` command and stops execution in case something went wrong.

:::note
The terraform manifest template/s is/are taken from `{{ component_type }}/code/{{ site_hypervisor }}/iac/*.tf.j2`.

You will mostly only need to modify the `template_id` parameter of the dummy_component sample terraform template (as well as other variable names). Note that the privileged starting user default to all components is 'jenkins'

The template has to be specified in the sites repository, and point to an existing template in your OpenNebula. The template can use the image you want, ranging from a base Ubuntu image (where all configuration is to be done), or a preconfigured custom image. These custom images are called appliances and you design your own ones following the documentation found in [this repository](https://github.com/6G-SANDBOX/marketplace-community). All custom appliances created by the project collaborators will be published in the official [marketplace](https://marketplace.mobilesandbox.cloud:9443/appliance)
:::

Components that use variables inherited from other component outputs require extra complexity. The intended way to import outputs (e.g. the IP in the default network of component `vm_kvm-ubuntu`) is as follows:
```yaml
- name: Retrieve terraform outputs
  ansible.builtin.shell:
  args:
    chdir: "{{ workspace }}/.terraform/"
    cmd: "set -o pipefail && terraform output --json | jq 'with_entries(.value |= .value)'"
    executable: /bin/bash
  register: terraform_outputs
  changed_when: false
- name: Set Terraform outputs as playbook facts
  ansible.builtin.set_fact:
    bastion_ip: "{{ (terraform_outputs.stdout | from_json)['vm_kvm-ubuntu-ip'][site_networks_id.default | string] }}"
```
To have a clean playbook, try to move these segments to custom task files.

### STAGE 2: Prepare to access the component

Stage with steps between the component deployment and its configuration. Usual steps include:
- Retrieving terraform outputs (old + new ones, all at once) to use the generated values in the configuration (e.g. IP asigned to the deployed VM)
- Setting the desired outputs as ansible facts (variables usable during the playbook)
- Process facts to generate others. Sometimes the terraform output is in json or other nested format and the usable information needs to be parsed.
- Add the new VM into Ansible Inventory: Inventory is how Ansible calls the available targets for configuration. In order to access the newly created VM for configuration, it has to be previously included into the Inventory. Default user used to access the Inventory hosts is 'jenkins'
- Register the component in to the sshconfig file of the Trial Network. This step is optional, as sshconfig is not intended to be used during the playbook, but it makes debugging easier from the Jenkins server. In future releases of the 6G-Library, an equal SSH config file will be passed to the bastion or to the user to facilitate SSH access.

### STAGE 3: Apply CaC to prepare the component

You can include in this stage all configuration needed to be done to the deployed VM. However and for unity, we ask you to include the following steps:
- (OPTIONAL) Importing task file `.global/cac/load_variables.yaml`: In ansible, facts are tied to a specific host/target. Run the load_variables tasks again to have the same files in the new host.
- Add the (optional) `site_admin_ssh_public_key` public key into the jenkins user in the VMs.
- Create a new user for the experimenter to access the VM. Default name is 'tnuser'
- Add the TN public ssh key to user 'tnuser'. This public ssh key is created during tn_bation/tn_init, and accesible as a terraform output in all deployments.

### STAGE 4: Publish execution results

After successfully configuring the component, perform tasks to publish what has been done. Usual tasks are:
- Importing task file `.global/cac/custom_tf_outputs.yaml`: It reads the custom outputs from variable `custom_outputs`, and incorporates them into the file `.terraform/tf-custom_outputs.tf` in the terraform workspace.
- Importing task file `.global/cac/publish_ok_results.yaml`: Publishes the terraform manifest/s to the S3 storage. It also reads the custom outputs from variable `output`, and uses it to:
  - Complete the markdown template at `{{ component_type }}/result_templates/ok_result.md.j2` with component information, and publish it to the S3 storage.
  - Complete the JSON template at `.global/json_templates/ok_result.json.j2` with component information and the previous markdown content, and send it in a POST request back to the TNLCM.

With a few exceptions, facts `custom_outputs` and `output` include the same variables. Just remember `custom_outputs` is the information available in other deployments and `output` the information available to the experimenter in the TNLCM. Variables in `output` need to be the ones described in `{{ component_type }}/.tnlcm/public.yaml`

## Based on a Helm Chart

An example of a component based on a Helm Chart is the open5gs. Any component based on a Helm Chart needs to specify an OneKE component where it will be deployed.

These components can be structured in 3 different stages. These stages are separated with [Ansible plays](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html) to improve logical segmentation and gain readability, but as you may realize, if two consecutive stages have the same hosts (localhost) there is no need to add new ones. Remember these are just suggested stages, your component deployment might not fit into these and you can add and remove whichever you want.

You can complete any STAGE with your own task files. Just drop them at `{{ component_type }}/code/all/cac/` and import them from the main playbook.

### STAGE 1: Apply IaC to deploy the component

These stage includes all pre-deployment tasks as well as the actual deployment. Usual steps include:
- Importing task file `.global/cac/load_variables.yaml`: Import variables as hostvars into the playbook. Previously mentioned in the landing page [EXTRA section](https://github.com/6G-SANDBOX/6G-Library/wiki#extra)
- Importing task file `.global/cac/terraform_workdir.yaml`: Prepares directory `.terraform` in the Jenkins workspace, which will serve as the Terraform workspace. Sets the [.tfstate backend as S3](https://developer.hashicorp.com/terraform/language/settings/backends/s3) (MinIO) and downloads the manifests of previous components.
- Retrieve terraform outputs with:
```yaml
- name: Retrieve terraform outputs
  ansible.builtin.shell:
  args:
    chdir: "{{ workspace }}/.terraform/"
    cmd: "set -o pipefail && terraform output --json | jq 'with_entries(.value |= .value)'"
    executable: /bin/bash
  register: terraform_outputs
  changed_when: false
```

- Set as playbook facts the bastion IP and the chosen OneKE's VNF IP.
```yaml
- name: Set Terraform outputs as playbook facts
  ansible.builtin.set_fact:
    bastion_ip: "{{ (terraform_outputs.stdout | from_json)['tn_bastion-ips'][site_networks_id.default | string] }}"
    node_ips: "{{ (terraform_outputs.stdout | from_json)[one_open5gs_oneKE + '-node_ips'] }}"
```
- Add the chosen OneKE's master to Ansible Inventory: Inventory is how Ansible calls the available targets for configuration. In order to access the K8s master for configuration, it has to be previously included into the Inventory. OneKE's master needs to be accessed with the 'root' user

### STAGE 2: Apply CaC to prepare the component

Deploy the helm chart into the K8s cluster. Usual steps include:
- (OPTIONAL) Importing task file `.global/cac/load_variables.yaml`: In ansible, facts are tied to a specific host/target. Run the load_variables tasks again to have the same files in the new host.
- Importing a custom file from `{{ component_type }}/code/all/cac/`: At least one custom task aplying the Chart using Ansible's helm module.

### STAGE 3: Publish execution results

After successfully applying the chart, perform tasks to publish what has been done. Usual tasks are:
- Importing task file `.global/cac/custom_tf_outputs.yaml`: It reads the custom outputs from variable `custom_outputs`, and incorporates them into the file `.terraform/tf-custom_outputs.tf` in the terraform workspace.
- Importing task file `.global/cac/publish_ok_results.yaml`: Publishes the terraform manifest/s to the S3 storage. It also reads the custom outputs from variable `output`, and uses it to:
  - Complete the markdown template at `{{ component_type }}/result_templates/ok_result.md.j2` with component information, and publish it to the S3 storage.
  - Complete the JSON template at `.global/json_templates/ok_result.json.j2` with component information and the previous markdown content, and send it in a POST request back to the TNLCM.

With a few exceptions, facts `custom_outputs` and `output` include the same variables. Just remember `custom_outputs` is the information available in other deployments and `output` the information available to the experimenter in the TNLCM. Variables in `output` need to be the ones described in `{{ component_type }}/.tnlcm/public.yaml`
