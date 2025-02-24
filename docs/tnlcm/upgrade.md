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

Access via SSH to OpenNebula frontend.

Access via SSH to the TNLCM virtual machine that is running in OpenNebula frontend. You can use the following command:

```bash
onevm ssh <VM_ID-OR-VM_NAME>
```

## Download upgrade script

Download the upgrade script using one of the following command.

- Using `curl`:

```bash
curl -O https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/main/scripts/upgrade.sh
```

- Using `wget`:

```bash
wget https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/main/scripts/upgrade.sh
```

## Execute upgrade script

Give execution permissions to the script:

```bash
chmod +x upgrade.sh
```

Run the script:

```bash
./upgrade.sh
```

Select the version you want to upgrade.
