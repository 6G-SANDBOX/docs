---
sidebar_position: 1
title: "JENKINS"
sidebar_label: "JENKINS"
draft: false
---

## Overview

<p align="center">
  <a href="https://www.jenkins.io/"><img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png"  width="100" title="Jenkins"></img></a>
</p>

**[JENKINS](https://www.jenkins.io/)** is a Java-based program that can be used for continuous integration, continuous delivery and other automation tasks. It supports hundreds of plugins and can run on various operating systems and platforms.
This appliance deploys a Jenkins Service along with any necessary configuration in your site out of the box to start deploying Trial Networks.

## Download

The latest version of the Jenkins appliance can be downloaded from the 6G-SANDBOX official Marketplace
- [jenkins](https://marketplace.mobilesandbox.cloud:9443/appliance/service_jenkins)

## Requirements

* OpenNebula version: >= 6.4
* Minimum RAM: 4GiB
* Minimum vCPU: 2
* Minimum storage: 10GiB

## Features and usage

The appliance comes with [Jenkins completely preinstalled](https://www.jenkins.io/doc/book/installing/linux/), along with:
- All necessary plugins to effectively run Trial Networks in your site.
- Pipelines [`TN_DEPLOY`](https://github.com/6G-SANDBOX/6G-Library/blob/main/.global/pac/TN_DEPLOY.groovy) and [`TN_DESTROY`](https://github.com/6G-SANDBOX/6G-Library/blob/main/.global/pac/TN_DESTROY.groovy) already loaded.
- Jenkins credentials loaded at boot time according to the contextualization variables sent as input.

:::warning
You might need to manually access the VM to gather some files generated at bootstrap from `/var/lib/jenkins/consult_me/` in order to proceed with the installation of a Site:
:::

- **`jenkins_tnlcm_token`**: The first time the VM boots, a Jenkins user gets created using contextualization variables `JENKINS_USERNAME` and `JENKINS_PASSWORD`. Following this creation, a token is generated to connect to the Jenkins API. This token is needed when deploying the [TNLCM](https://github.com/6G-SANDBOX/marketplace-community/wiki/tnlcm).
- **`id_ed25519.pub`**: The first time the VM boots, a pair of SSH keys gets generated for Linux user `jenkins`. In order to access the Trial Networks VMs deployed by Jenkins, you must set `OPENNEBULA_USERNAME` public key from the OpenNebula Frontend. Use this generated key and place it there.

## Contextualization

Contextualization parameters provided in the Virtual Machine template ([CONTEXT section](https://docs.opennebula.io/6.8/management_and_operations/references/template.html?highlight=context#context-section)) control the initial VM configuration. Except for the common set of parameters supported by every appliance on the OpenNebula Marketplace, there are few specific to this particular jenkins appliance:

* `GNB_*` and `UE_*` parameters replace the variables of their respective config file at `/etc/ueransim/`.
* `RUN_GNB` and `RUN_UE` determine if their respective service should be started at boot time.

The parameters should be provided in the CONTEXT section of the Virtual Machine template, read the [OpenNebula Management and Operations Guide](https://docs.opennebula.io/stable/management_and_operations) for more details.

| Parameter                  | Description                                                           | Default Value |
|----------------------------|-----------------------------------------------------------------------|---------------|
| `JENKINS_USERNAME`         | The username for the Jenkins admin user                               | `admin`       |
| `JENKINS_PASSWORD`         | The password for the Jenkins admin user                               | `admin`       |
| `ANSIBLE_VAULT_PASSWORD`   | Password to encrypt and decrypt the [6G-Sandbox-Sites repository](https://github.com/6G-SANDBOX/6G-Sandbox-Sites) files for your site using Ansible Vault | \<undefined\> |
| `OPENNEBULA_ENDPOINT`      | The URL of your OpenNebula XML-RPC Endpoint API (for example, 'http://example.com:2633/RPC2') | \<undefined\> |
| `OPENNEBULA_FLOW_ENDPOINT` | The URL of your OneFlow HTTP Endpoint API (for example, 'http://example.com:2474')            | \<undefined\> |
| `OPENNEBULA_USERNAME`      | The OpenNebula username used to deploy each component                 | \<undefined\> |
| `OPENNEBULA_PASSWORD`      | The OpenNebula password matching OPENNEBULA_USERNAME                  | \<undefined\> |
| `OPENNEBULA_INSECURE`      | Allow insecure connexion into the OpenNebula XML-RPC Endpoint API (skip TLS verification) | `true` |
| `AWS_ACCESS_KEY_ID`        | S3 Storage access key. Same as used in the [MinIO instance](https://github.com/OpenNebula/one-apps/wiki/minio_feature) | \<undefined\> |
| `AWS_SECRET_ACCESS_KEY`    | S3 Storage secret key. Same as used in the [MinIO instance](https://github.com/OpenNebula/one-apps/wiki/minio_feature) | \<undefined\> |