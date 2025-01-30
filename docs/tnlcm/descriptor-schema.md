---
sidebar_position: 3
title: "Descriptor Schema"
sidebar_label: "Descriptor Schema"
draft: false
---

:::warning
The format of Trial Network Descriptors has not been finalized and is expected to change in the future.
:::

Trial Network Descriptors are yaml files with a set of expected fields and with the following structure:

```yaml
trial_network: # Mandatory, contains the description of all entities in the Trial Network
  type-name: # Mandatory, entity name. Unique identifier for each entity in the Trial Network
    type: # Mandatory, 6G-Library component type
    name: # Mandatory, custom name. Not use character \- or \. Exclude components tn_init, tn_bastion and tn_vxlan
    debug: # Optional, param to debug component in Jenkins. Possible values true or false
    dependencies: # Mandatory, list of dependencies of the component with other components
      - type-name
      - ...
    input: # Mandatory, dictionary with the variables collected from the input part of the 6G-Library
      key: value
```

This repository contains some advanced [descriptors](https://github.com/6G-SANDBOX/TNLCM/tree/main/tn_template_lib). Access the [documentation](https://github.com/6G-SANDBOX/TNLCM/blob/main/tn_template_lib/README.md) to see what is defined in each of them.

- [`ueransim_split.yaml`](https://github.com/6G-SANDBOX/TNLCM/blob/main/tn_template_lib/ueransim_split.yaml) - **should work on all platforms**. First end-to-end trial network.
- [`loadcore_open5gs_vm.yaml`](https://github.com/6G-SANDBOX/TNLCM/blob/main/tn_template_lib/loadcore_open5gs_vm.yaml) - **should work on all platforms**. Reference trial network defined in WP5.

:::note
Each component in the [6G-Library](https://github.com/6G-SANDBOX/6G-Library) has a descriptor and a readme defined to understand how it works.
:::