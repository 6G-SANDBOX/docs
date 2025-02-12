---
sidebar_position: 3
title: "Phases"
sidebar_label: "Phases"
draft: false
---

### Zero phase

- Update ubuntu packages.
- Check if the script is being executed as root.
- Check if the OpenNebula CLI tools are installed.

### First phase

- Create 6G-SANDBOX group.
- Create jenkins-master user.

### Second phase

- Add the 6G-SANDBOX marketplace to OpenNebula.
- Instantiate the 6G-SANDBOX Toolkit appliance.
- Assign ssh key to jenkins-master user.

### Third phase

- Refresh the list of available appliances in the marketplace.
- Download required appliances from the OpenNebula Public marketplace:
  - Ubuntu 22.04
- Download required appliances from the 6G-SANDBOX marketplace:
  - Service 6G-Sandbox Toolkit
  - Service oneKE 1.31
  - UERANSIM
  - Bastion

### Fourth phase

- Integrate with 6G-SANDBOX-Sites repository.
- Create new 6G-SANDBOX sites in 6G-Sandbox-Sites repository.

### Fifth phase

- Integrate with TNLCM repository.
- Run an end-to-end trial network.