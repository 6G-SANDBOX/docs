---
sidebar_position: 5
title: "Database Schema"
sidebar_label: "Database Schema"
draft: false
---

TNLCM database, created with MongoDB, consists of several collections that store important information about `trial network` and `user`. Below is a description of each collection, along with a graphical representation using SQL syntax created with [dbdiagram.io](https://dbdiagram.io/).

## Collections

### Collection `trial_network`

| Field                               | Type     | Description                                |
| ----------------------------------- | -------- | ------------------------------------------ |
| `user_created`                      | string   | User that created the trial network        |
| `tn_id`                             | string   | ID of the trial network (primary key)      |
| `state`                             | string   | State of the trial network                 |
| `date_created_utc`                  | date     | Creation date and time in UTC              |
| `raw_descriptor`                    | dict     | Raw descriptor of the trial network        |
| `sorted_descriptor`                 | dict     | Sorted descriptor                          |
| `deployed_descriptor`               | dict     | Current status of descriptor               |
| `report`                            | markdown | Report related to the trial network        |
| `directory_path`                    | string   | Directory where trial network is saved     |
| `jenkins_deploy_pipeline`           | string   | Pipeline for descriptor deployment         |
| `jenkins_destroy_pipeline`          | string   | Pipeline for destroying trial network      |
| `deployment_site`                   | string   | Deployment site of trial network           |
| `input`                             | dict     | YAML files per entity-name sent to Jenkins |
| `output`                            | dict     | JSON received by Jenkins per entity-name   |
| `library_https_url`                 | string   | Library github https url                   |
| `library_commit_id`                 | string   | Library commit ID                          |
| `sites_https_url`                   | string   | Sites github https url                     |
| `sites_commit_id`                   | string   | Sites commit ID                            |

### Collection `user`

| Field      | Type   | Description                   |
| ---------- | ------ | ----------------------------- |
| `email`    | string | User's email address          |
| `username` | string | User's username (primary key) |
| `password` | string | User's hashed password        |
| `role`     | string | User's role                   |
| `org`      | string | User's organization           |

## Relationships

- `trial_network.user_created > user.username` // A user can have multiple trial_networks (one-to-many)

## Model

![model](./images/model.png)
