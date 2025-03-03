---
sidebar_position: 3
title: "UERANSIM"
sidebar_label: "UERANSIM"
draft: false
---

## Overview

<p align="center">
  <a href="https://github.com/aligungr/UERANSIM"><img src="https://raw.githubusercontent.com/aligungr/UERANSIM/master/.github/logo.png" width="100" title="UERANSIM"></img></a>
</p>

**[UERANSIM](https://github.com/aligungr/UERANSIM)** <small>(pronounced "ju-i ræn sɪm")</small>, is an open source state-of-the-art 5G UE and RAN (gNodeB) simulator. This appliance can be used for testing 5G Core Networks and studying 5G Systems implementing the following technologies:
- **gNodeB**: emulates cellular base station (gNodeB) in a 5G Standalone RAN and performs communication with 5G Core components. 
- **UE**: emulates a 5G Standalone 5G User Equipment, i.e. cellular phone.

You can find more documentation about the UERANSIM project on their [official wiki](https://github.com/aligungr/UERANSIM/wiki).

:::warning
This appliance is meant to be used together with a 5G core, not part of this appliance.
:::

## Download

The latest version of the UERANSIM appliance can be downloaded from the 6G-SANDBOX official Marketplace
- [UERANSIM](https://marketplace.mobilesandbox.cloud:9443/appliance/service_UERANSIM)

## Components

| Name                      | Version    |
| ------------------------- | ---------- |
| Ubuntu                    | 22.04 LTS  |
| UERANSIM                  | v3.2.6     |
| Contextualization package | 6.10.0     |


## Requirements

* OpenNebula version: >= 6.4
* Minimum RAM: 2GiB
* Minimum vCPU: 2
* Minimum storage: 10GiB

## Features and usage

The appliance comes with the necessary [UERANSIM](https://github.com/aligungr/UERANSIM) files and software, which includes:

- UERANSIM v3.2.6 binaries at `/usr/local/bin/`, which include:
  - **nr-gnb**: Main executable for 5G gNB (RAN)
  - **nr-ue**: Main executable for 5G UE
  - **nr-cli**: CLI tool for 5G gNB and UE
  - **nr-binder**: A tool for utilizing UE's internet connectivity.
- UERANSIM v3.2.6 libraries at `/usr/local/lib/`, which include:
  - **libdevbnd.so**: A dynamic library for nr-binder
- Sample configuration files for gNB and UE to connect to 5G core implemented with Open5GS at `/etc/ueransim/open5gs-gnb-bak.yaml` and `/etc/ueransim/open5gs-ue-bak.yaml`
- Configuration files for gNB and UE with values taken from the contextualization variables at `/etc/ueransim/open5gs-gnb.yaml` and `/etc/ueransim/open5gs-ue.yaml`
- Systemd services (`ueransim-gnb.service` and `ueransim-ue.service`) to boot binaries `nr-gnb` and `nr-ue` with the configuration files with the contextualization variables.

:::warning
This appliance is meant to be used together with a 5G core, not part of this appliance.
:::

## Contextualization

Contextualization parameters provided in the Virtual Machine template ([CONTEXT section](https://docs.opennebula.io/6.8/management_and_operations/references/template.html?highlight=context#context-section)) control the initial VM configuration. Except for the common set of parameters supported by every appliance on the OpenNebula Marketplace, there are few specific to this particular UERANSIM appliance.
* `GNB_*` and `UE_*` parameters replace the variables of their respective config file at `/etc/ueransim/`.
* `RUN_GNB` and `RUN_UE` determine if their respective service should be started at boot time.

The parameters should be provided in the CONTEXT section of the Virtual Machine template, read the [OpenNebula Management and Operations Guide](https://docs.opennebula.io/stable/management_and_operations) for more details.

| Parameter                 | Description                                                           | Default Value |
|---------------------------|-----------------------------------------------------------------------|---------------|
| `GNB_AMF_ADDRESS`         | gNB AMF IP Address                                                    | \<undefined\> |
| `GNB_MCC`                 | gNB Mobile Country Code value                                         | `999`         |
| `GNB_MNC`                 | gNB Mobile Network Code value (2 or 3 digits)                         | `70`          |
| `GNB_SLICES_SD`           | gNB SD of the supported S-NSSAI                                       | `1`           |
| `GNB_SLICES_SST`          | gNB SST of the supported S-NSSAI                                      | `1`           |
| `GNB_TAC`                 | gNB Tracking Area Code                                                | `1`           |
| `ONEKE_VNF`               | If specified, gateway IP where the gNB will route the traffic in order to reach the `gnb_amf_address` | \<undefined\> |
| `RUN_GNB`                 | Whether to start the gNB service or not                               | \<undefined\> |
| `RUN_UE`                  | Whether to start the UE service or not                                | \<undefined\> |
| `UE_CONFIGURED_NSSAI_SD`  | UE SD of the NSSAI configured by HPLMN                                | \<undefined\> |
| `UE_CONFIGURED_NSSAI_SST` | UE SST of the NSSAI configured by HPLMN                               | `1`           |
| `UE_DEFAULT_NSSAI_SD`     | UE SD of the default Configured NSSAI                                 | `1`           |
| `UE_DEFAULT_NSSAI_SST`    | UE SST of the default Configured NSSAI                                | `1`           |
| `UE_GNBSEARCHLIST`        | UE comma separated list of gNB IP addresses for Radio Link Simulation | \<undefined\> |
| `UE_KEY`                  | UE permanent subscription key                                         | `465B5CE8B199B49FAA5F0A2EE238A6BC` |
| `UE_MCC`                  | UE Mobile Country Code value of HPLMN                                 | `999`         |
| `UE_MNC`                  | UE Mobile Network Code value of HPLMN (2 or 3 digits)                 | `70`          |
| `UE_OP`                   | UE Operator code (OP or OPC)                                          | `E8ED289DEBA952E4283B54E88E6183CA` |
| `UE_SESSION_APN`          | UE APN of the initial PDU session to be stablished                    | `internet`    |
| `UE_SESSION_SD`           | UE APN of the initial SD session to be stablished                     | \<undefined\> |
| `UE_SESSION_SST`          | UE APN of the initial SST session to be stablished                    | `1`           |
| `UE_SUPI`                 | UE IMSI number. IMSI = [MCC\|MNC\|MSISDN] (In total 15 digits)        | `imsi-999700000000001` |

In the gNB config file, parameters `.linkIp`, `.ngapIp` and `.gtpIp` are automatically set to use the host's main IP address.

In the UE config file, if CONTEXT variable `UE_GNBSEARCHLIST` is left undefined it will aso take the host's main IP address, assuming that the  gNB to use is the simulated one in the same VM.

Regarding the integration of the UERANSIM with 5G Cores deployed with Open5GS within OneKE, the `ueransim-gnb.service` will setup route `${oneke_subnet} via ${ONEKE_VNF}` as a `ExecStartPre`, with `oneke_subnet` assumed to be the /24 subnet of the address specified at `GNB_AMF_ADDRESS`.

:::warning
If either `ONEKE_VNF` or `GNB_AMF_ADDRESS` are not defined, no route will be defined at `ueransim-gnb.service`.
:::

## Known issues and limitations

If you try to build this appliance in your own system, if will fail to do so the first time. The reason is that the packer code for the UERANSIM requires to already have the UERANSIM binaries precompiled in your system. However, the same `packer build` command of the makefile will proceed to download the required packages and compile the source code from the UERANSIM repository.

Once compiled, the second time you attempt to build the UERANSIM, the files will be available to import and the build will succeed.
