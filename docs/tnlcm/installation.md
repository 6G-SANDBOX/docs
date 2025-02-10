---
sidebar_position: 2
title: "Installation"
sidebar_label: "Installation"
draft: false
---

## :white_check_mark: Requirements

TNLCM requires the **prior** installation of:

| Tool             | Release                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| OpenNebula       | [v6.10](https://github.com/OpenNebula/one/releases/tag/release-6.10.0)                 |
| MinIO            | [2024-07-04](https://github.com/minio/minio/releases/tag/RELEASE.2024-07-04T14-25-45Z) |
| Jenkins          | [v2.462.3](https://github.com/jenkinsci/jenkins/releases/tag/jenkins-2.462.3)          |

:::tip
You can install the full stack MinIO, Jenkins and TNLCM in OpenNebula by following the toolkit installer guide [here](../toolkit-installer/run-toolkit-installer.md).
:::

## :inbox_tray: Download the installation script

Download the installation script which is [`install.sh`](https://github.com/6G-SANDBOX/TNLCM/blob/main/scripts/install.sh).

```bash
curl -O https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/main/scripts/install.sh
```

```bash
wget https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/main/scripts/install.sh
```

## :desktop_computer: Execute installation script

Give execution permissions to the script:

```bash
chmod +x install.sh
```

Run the script and follow the instructions:

```bash
./install.sh
```

A [Swagger UI](swagger-ui.md) will be available at the url http://tnlcm-backend-ip:5000 where the API with the endpoints are exposed.