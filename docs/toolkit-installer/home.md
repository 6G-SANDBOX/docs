---
sidebar_position: 1
title: "Home"
sidebar_label: "Home"
draft: false
---

Toolkit installer is a Python script developed for the [6G-SANDBOX](https://6g-sandbox.eu/) project, designed to facilitate the creation of new &G-SANDBOX [sites](../6g-sandbox-sites/home.md). This script automates the installation of the **MinIO, Jenkins, and TNLCM** stack in OpenNebula using the [service toolkit](https://marketplace.mobilesandbox.cloud:9443/appliance/service_toolkit). This tool ensures consistency and reduces the complexity of initializing new 6G-SANDBOX sites, providing an efficient and user-friendly approach to managing site creation within the project's ecosystem.

## Project structure

```
toolkit-installer/           // main directory.
├─ .github/                  // directory contains files and templates for GitHub workflow automation.
├─ phases/                   // directory that the phases code is stored.
│  └─ utils/                 // directory that handler data conversions and storage in YAML, Markdown and JSON formats.
├─ docs/                     // directory where documentation is stored.
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
