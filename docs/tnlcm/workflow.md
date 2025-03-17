---
sidebar_position: 7
title: "Workflow"
sidebar_label: "Workflow"
draft: false
---

## Overview of TNLCM and 6G-Library implementation

![overview](./images/overview.png)

## State Machine

TNLCM is a **state machine** that allows the automation of component deployment. Green indicates what is implemented and red indicates what is in the process of implementation.

### States

- **activated**: the trial network is deployed in OpenNebula and ready to use.
- **created**: the trial network descriptor is created but not yet validated.
- **destroyed**: the trial network deployment is removed from OpenNebula and ready for deploy again.
- **failed-activation**: the trial network deployment failed. It is waiting for the user to try again.
- **failed-destruction**: the trial network deployment removal failed. It is waiting for the user to try again.
- **purged**: all the information about the trial network is removed from the database.
- **validated**: the trial network descriptor is created and validated. It is ready to be deployed in OpenNebula.
<!-- - **failed-suspension**: the trial network suspension failed. It is waiting for the user to try again. -->
<!-- - **suspended**: the trial network is not in use but it is still deployed in OpenNebula. -->

### Transitions

- **initial-state** &rarr; **created**: create a trial network descriptor that not validated yet. It allows save the descriptor for further editing at a later time.
- **initial-state** &rarr; **validated**: create and validate a trial network descriptor in the same step. It check if the descriptor can be deployed.
- **created** &rarr; **created**: edit the trial network descriptor.
- **created** &rarr; **validated**: apply validation to the trial network descriptor.
- **created** &rarr; **purged**: remove all the information about the trial network in database.
- **validated** &rarr; **purged**: remove all the information about the trial network in database.
- **validated** &rarr; **activated**: activate the trial network. It deploys the trial network in OpenNebula.
- **validated** &rarr; **failed-activation**: trial network deployment failed. It is waiting for the user to try again.
- **failed-activation** &rarr; **failed-activation**: retry the trial network deployment and it fails again.
- **failed-activation** &rarr; **activated**: retry the trial network deployment and it is successful.
- **failed-activation** &rarr; **destroyed**: remove the trial network deployment from OpenNebula and ready for deploy again.
- **activated** &rarr; **destroyed**: remove the trial network deployment from OpenNebula and ready for deploy again.
- **activated** &rarr; **failed-destroyed**: trial network deployment removal failed. It is waiting for the user to try again.
- **destroyed** &rarr; **purged**: remove all the information about the trial network in database.
- **destroyed** &rarr; **failed-activation**: retry the trial network deployment and it fails.
- **destroyed** &rarr; **activated**: retry the trial network deployment and it is successful.
- **failed-destruction** &rarr; **destroyed**: retry the trial network deployment removal and it is successful.
- **failed-destruction** &rarr; **failed-destruction**: retry the trial network deployment removal and it fails again.

![stateMachine](./images/stateMachine.png)
