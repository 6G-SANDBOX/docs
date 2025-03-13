---
sidebar_position: 2
title: "Installation"
sidebar_label: "Installation"
draft: false
---

## Requirements

TNLCM requires the **prior** installation of:

- **OpenNebula**: [v6.10](https://github.com/OpenNebula/one/releases/tag/release-6.10.0)
- **MinIO**: [2024-10-02](https://github.com/minio/minio/releases/tag/RELEASE.2024-10-02T17-50-41Z)
- **Jenkins**: [v2.492.1](https://github.com/jenkinsci/jenkins/releases/tag/jenkins-2.492.1)

:::tip
You can install the full stack MinIO, Jenkins and TNLCM in OpenNebula by following the toolkit installer guide [here](../toolkit-installer/installation.md).
:::

## Download installation script

Download the installation script using one of the following command.

- Using `curl`:

```bash
curl -O https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/main/scripts/install.sh
```

- Using `wget`:

```bash
wget https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/main/scripts/install.sh
```

## Execute installation script

Give execution permissions to the script:

```bash
chmod +x install.sh
```

Run the script and follow the instructions:

```bash
./install.sh
```

A [Swagger UI](./swagger-ui.md) will be available at the url http://tnlcm-backend-ip:5000 where the API with the endpoints are exposed.
