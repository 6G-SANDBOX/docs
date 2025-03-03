---
sidebar_position: 1
title: "Home"
sidebar_label: "Home"
draft: false
---

Toolkit installer is a Python script developed for the [6G-SANDBOX](https://6g-sandbox.eu/) project, designed to facilitate the creation of new 6G-SANDBOX [sites](../6g-sandbox-sites/home.md). This script automates the installation of the **MinIO, Jenkins and TNLCM** stack in OpenNebula using the [toolkit service](https://marketplace.mobilesandbox.cloud:9443/appliance/service_toolkit). This tool ensures consistency and reduces the complexity of initializing new 6G-SANDBOX sites, providing an efficient and user-friendly approach to managing site creation within the project's ecosystem.

## Project structure

```
toolkit-installer/           // main directory.
├─ .github/                  // directory contains files and templates for GitHub workflow automation.
├─ docs/                     // directory where documentation is stored.
├─ phases/                   // directory that the phases code is stored.
│  └─ utils/                 // directory that handler data conversions and storage in YAML, Markdown and JSON formats.
├─ scripts/                  // directory contains scripts for automated deployments.
├─ .env                      // file that contains environment variables for configuring the application.
├─ .gitignore                // file specifying intentionally untracked files to ignore.
├─ CHANGELOG.md              // file containing the changes made in each release.
├─ installer.py              // main file that execute the toolkit.
├─ pyproyect.toml            // file containing the libraries and their versions.
└─ uv.lock
```

## How it works

The toolkit installer is divided into five phases, each with specific tasks and objectives:

### Zero phase

- Check if the script is being executed as root.
- Check if the OpenNebula CLI tools are installed.

### First phase

- Create 6G-SANDBOX group in OpenNebula.
- Create jenkins-master user in OpenNebula.

### Second phase

- Add the [6G-SANDBOX marketplace](https://marketplace.mobilesandbox.cloud:9443/appliance) to OpenNebula.
- Instantiate the 6G-SANDBOX toolkit service.
- Assign ssh key obtained by jenkins virtual machine to jenkins-master user.

### Third phase

- Download required appliances from the OpenNebula Public marketplace:
  - Ubuntu 22.04 - vm_kvm
- Download the appliances of the components defined on the dummy site of the 6G-SANDBOX marketplace:
  - Service oneKE 1.31
  - UERANSIM
  - Bastion
- Possibility to download other appliances from the OpenNebula marketplace or from 6G-SANDBOX.

### Fourth phase

- Create new 6G-SANDBOX sites in 6G-Sandbox-Sites repository.

### Fifth phase

- Run an end-to-end trial network.
