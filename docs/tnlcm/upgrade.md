---
sidebar_position: 3
title: "Upgrade"
sidebar_label: "Upgrade"
draft: false
---

:::important
The upgrade script starts to take effect from version 0.4.4. That is, you can use it if your current TNLCM version is 0.4.4 or higher.
:::

## Access to TNLCM virtual machine

Access via SSH to the TNLCM virtual machine that is running in OpenNebula frontend.

## :inbox_tray: Download the upgrade script

Download the upgrade script which is [`upgrade.sh`](https://github.com/6G-SANDBOX/TNLCM/blob/main/scripts/upgrade.sh).

```bash
curl -O https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/main/scripts/upgrade.sh
```

```bash
wget https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/main/scripts/upgrade.sh
```

## :desktop_computer: Execute upgrade script

Give execution permissions to the script:

```bash
chmod +x upgrade.sh
```

Run the script:

```bash
./upgrade.sh
```

Select the version you want to upgrade.