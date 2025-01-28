---
sidebar_position: 2
title: "TNLCM"
sidebar_label: "TNLCM"
draft: false
---

## Overview

<p align="center">
  <a href="https://github.com/6G-SANDBOX/TNLCM"><img src="https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/main/docs/images/logo.png" width="100" title="TNLCM"></img></a>
</p>

**[TNLCM](https://github.com/6G-SANDBOX/TNLCM)** has been designed as a modular application, with the intention of making certain components easily replaceable or extended, while minimizing the effect of changes in other parts of the application. At the same time, there is an emphasis on re-usability, where several data structures and generic logic can be shared between the different components of the application.

## Download

The latest version of TNLCM appliance can be downloaded from the OpenNebula public Marketplace. The appliance includes the [backend](https://github.com/6G-SANDBOX/TNLCM) and the [frontend](https://github.com/6G-SANDBOX/TNLCM_FRONTEND) of the TNLCM.

- Backend [v0.4.4](https://marketplace.mobilesandbox.cloud:9443/appliance/service_TNLCM)
- Frontend [v0.0.0](https://marketplace.mobilesandbox.cloud:9443/appliance/service_TNLCM)

## Components

| Name                      | Version    |
| ------------------------- | ---------- |
| Ubuntu                    | 22.04 LTS  |
| TNLCM backend             | v0.4.4     |
| TNLCM frontend            | v0.0.0     |
| Contextualization package | 6.10.0     |

## Requirements

* OpenNebula version: >= 6.4
* Minimum RAM: 4GiB
* Minimum vCPU: 2
* Minimum storage: 7GiB

## Features and Usage

This appliance comes with TNLCM backend and frontend installed, following [TNLCM backend official install guide](https://github.com/6G-SANDBOX/TNLCM?tab=readme-ov-file#rocket-getting-started-locally) and [TNLCM frontend official install guide](https://github.com/6G-SANDBOX/TNLCM_FRONTEND?tab=readme-ov-file#rocket-getting-started-locally) including the following features:

- Backend configuration file in `/opt/TNLCM/.env`
- Frontend configuration file in `/opt/TNLCM_FRONTEND/.env`

## Contextualization

The contextualization parameters ([CONTEXT section](https://docs.opennebula.io/stable/management_and_operations)) in the VM template controls the configuration of the service, see the table below:

| Parameter                            | Default        | Description                                                                          |
| ------------------------------------ | -------------- | ------------------------------------------------------------------------------------ |
| ``ONEAPP_TNLCM_JENKINS_HOST``        | ``127.0.0.1``  | IP address of the Jenkins server used to deploy the Trial Networks                   |
| ``ONEAPP_TNLCM_JENKINS_PASSWORD``    | ``tnlcm``      | Password used to login into the Jenkins server to access and retrieve pipeline info. |
| ``ONEAPP_TNLCM_JENKINS_TOKEN``       |                | Token to authenticate while sending POST requests to the Jenkins Server API          |
| ``ONEAPP_TNLCM_JENKINS_USERNAME``    | ``tnlcm``      | Username used to login into the Jenkins server to access and retrieve pipeline info. |
| ``ONEAPP_TNLCM_SITES_TOKEN``         |                | Password used to decrypt the contents of the 6G-Sandbox-Sites repository file        |
| ``ONEAPP_TNLCM_ADMIN_USER``          | ``tnlcm``      | Name of the administrator user that is created by default                            |
| ``ONEAPP_TNLCM_ADMIN_PASSWORD``      | ``tnlcm``      | Administrator user password created by default                                       |

TNLCM backend use the parameter ``ONEAPP_TNLCM_JENKINS_HOST``, ``ONEAPP_TNLCM_JENKINS_PASSWORD``, ``ONEAPP_TNLCM_JENKINS_TOKEN``, ``ONEAPP_TNLCM_JENKINS_USERNAME``, ``ONEAPP_TNLCM_ANSIBLE_VAULT``, ``ONEAPP_TNLCM_ADMIN_USER`` and ``ONEAPP_TNLCM_ADMIN_PASSWORD``. All parameters are mandatory. If any of them are missing, TNLCM will throw an error.