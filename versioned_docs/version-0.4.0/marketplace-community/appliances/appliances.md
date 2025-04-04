---
sidebar_position: 3
title: "Appliances"
sidebar_label: "Appliances"
draft: false
---

## Prerequisites

In order to create appliances, you must first create an Ubuntu 22.04 virtual machine. It is recommended that you have the following resources:

:::note
Keep in mind that in this virtual machine you have to virtualize machines that compile inside. So give the resources that you consider appropriate.
:::

- 4 vCPUs
- 4 physical CPUs
- 16 GB RAM
- 50 GB disk space

Then you need to have packer installed in your Ubuntu. If you plan to build appliances on a VM make sure to have **nested virtualization** to be able to use kvm inside the VM. To do that, you need to load the option for your hypervisor kernel module. (TODO @alvarocurto: The following steps must be done at host level, not sure, ask alvaro):

```bash
# Replace kvm_intel with kvm_amd depending on your CPU
cat /sys/module/kvm_intel/parameters/nested  # Check if hosts already permits nested virtualization
# Create a modprobe file to enable the option
echo "options kvm_intel nested=1" > /etc/modprobe.d/kvm_intel.conf
# Enable VMCS Shadowing. Speeds up the nested virtualization (i don't remember the source of this)
echo "options kvm-intel enable_shadow_vmcs=1" >> /etc/modprobe.d/kvm_intel.conf
update-initramfs -u -k all

# To apply the changes you can either reboot the system, or just reload the module (you still need to have no active VMs in the host)
modprobe -r kvm_intel
modprobe kvm_intel nested=1
```

To install Packer, these scripts is what we used:

```bash
###### Ubuntu 22.04 ######
# Install QEMU/KVM (probably some packages are not needed but better safe than sorry)
apt install -y qemu qemu-system-x86 qemu-utils libnbd-bin nbdkit fuse2fs qemu-system ovmf cloud-utils cloud-image-utils parted genisoimage guestfs-tools make nginx dpkg rpm rsync ruby 
# Install Packer
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/hashicorp.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list > /dev/null
sudo apt update && sudo apt install packer
```

## How to build existing appliances

:::note
The custom makefile of this repository assumes you are running a Marketplace Server in the same system. After each appliance is created, the makefile is configured to run a script that moves the resulting qcow to `$DIR_APPLIANCES` and create/update the metadata file in `$DIR_METADATA`. This automation streamlines the Continuous Delivery process of the appliances (we use it in the [6G-SANDBOX Marketplace](https://marketplace.mobilesandbox.cloud:9443/appliance)) but it might be unnecessary if you plan to just generate the qcow.

To disable this behaviour, go to file `community-apps/Makefile` and delete line `packer/update_metadata.sh "${DISTRO_NAME}" "${DISTRO_VER}" ${@}` before running any `make` command.

Variables `$DIR_APPLIANCES` and `$DIR_METADATA` can be modified from file `community-apps/Makefile.config` and are used in the custom script `community-apps/makefile_config/packer/update_metadata.sh`.
:::

1. Go to the `one-apps` directory (the one downloaded as a submodule) and generate the base image for the appliance/s you desire to build. For now, all available appliances use the Ubuntu 22.04 image so this is a braindead step.
```bash
cd marketplace-community/one-apps
sudo make ubuntu2204
```
This will generate the file `one-apps/export/ubuntu2204.qcow2`

2. Go to the `community-apps` directory and generate your desired appliance/s. For example, to generate TNLCM appliance:
```bash
cd ../community-apps
sudo make                   # This will show the name of all available appliances to build
sudo make service_TNLCM
```
This will generate the image file `community-apps/export/service_TNLCM.qcow2`, and if you leaved the "update_metadata.sh" reference in the Makefile, it will be moved to `$DIR_APPLIANCES`.

## How to create your own appliance

This guide might still be incomplete. Admins will add more steps when they have some spare time ⌛ . If information is inaccurate or insufficient, please do not hesitate to contact them/us. Your feedback is greatly appreciated.

### Appliance building code

1. Add your appliance name to makefile_config
2. Copy `community-apps/packer/.service_example/` and rename it as `community-apps/packer/service_<yourappliance>/`.
3. Rename file `community-apps/packer/service_<yourappliance>/example.pkr.hcl` as `service_<yourappliance>`. Modify it renaming any *example* reference, and so that it imports all the necessary files into the building image.
4. In file `community-apps/packer/service_<yourappliance>/variables.pkr.hcl` modify variable `appliance_name` with `service_<yourappliance>`
5. Now copy `community-apps/appliances/.example/` and rename it as `community-apps/appliances/<yourappliance>/`
6. Modify script `community-apps/appliances/<yourappliance>/appliance.sh` with all needed steps to configure your appliance.
    - Script is separated into sections install, configure and bootstrap. Install are the steps executed when building the image, configure when first booting the VM in a site, and bootstrap anytime the VM reboots.
    - Before the install section of the script runs, you can add files to the building image from the packer file.

Finally, run `make <yourappliance>[version]`

:::warning
If your makefile runs update_metadata.sh, do not build the image until you have a metadata file first or the makefile will fail
:::

### Appliance metadata

1. Copy `community-apps/metadata/.example.yaml`, rename it as `community-apps/metadata/service_<yourappliance>.yaml` and modify it.
    - Don't worry about values `version`, `creation_time`, `images[0].size`, `images[0].checksum.md5` and `images[0].checksum.sha256` being imprecise. You are editing a template and these values will be updated by the `update_metadata.sh` script.
2. Add a custom logo to `marketplace/logos/`

---

:::warning
Important when **updating** an existing appliance (building another image with packer and updating its yaml metadata):
OpenNebula clients are forced to update their cached appliance metadata only when certain values are modified in the marketplace files. Those are:
:::

- `version`
- `creation_time`
- `size` and the `checksums` must also be updated
