---
sidebar_position: 2
title: "Getting Started Locally"
sidebar_label: "Getting Started Locally"
draft: false
---

## :white_check_mark: Requirements

TNLCM requires the **prior** installation of:

| Repository       | Release                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| OpenNebula       | [v6.10](https://github.com/OpenNebula/one/releases/tag/release-6.10.0)                 |
| MinIO            | [2024-07-04](https://github.com/minio/minio/releases/tag/RELEASE.2024-07-04T14-25-45Z) |
| Jenkins          | [v2.462.3](https://github.com/jenkinsci/jenkins/releases/tag/jenkins-2.462.3)          |

:::tip
Additionally TNLCM depends on:

| Repository       | Release                                                                | Branch                                                     |
| ---------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| 6G-Library       | [v0.3.1](https://github.com/6G-SANDBOX/6G-Library/tree/release/v0.3.1) | -                                                          |
| 6G-Sandbox-Sites | -                                                                      | [platform](https://github.com/6G-SANDBOX/6G-Sandbox-Sites) |
:::

## :inbox_tray: Download the installation script

Download the installation script which is [`installer.sh`](https://github.com/6G-SANDBOX/TNLCM/blob/main/scripts/installer.sh).

## :desktop_computer: Execute installation script

Give execution permissions to the script:

```bash
chmod +x installer.sh
```

Run the script and follow the instructions:

```bash
./installer.sh
```

A [Swagger UI](swagger-ui.md) will be available at the url http://tnlcm-backend-ip:5000 where the API with the endpoints are exposed.