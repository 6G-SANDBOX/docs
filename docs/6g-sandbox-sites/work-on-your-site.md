---
sidebar_position: 3
title: "Work On Your Site"
sidebar_label: "Work On Your Site"
draft: false
---

## Requirements

:::note
If you don't have access to the repository, you can request it by creating an [**issue**](https://github.com/6G-SANDBOX/6G-Sandbox-Sites/issues/new?q=is%3Aissue&template=access_request.md) in the repository 6G-Sandbox-Sites requesting to join to the [**6G-SANDBOX sites contributors**](https://github.com/orgs/6G-SANDBOX/teams/6gsandbox-sites-contributors) group.
:::

To use the `ansible-vault` tool, the full *ansible* libraries and binaries are not needed. You can [install ansible](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.html) in your prefered way, but package `ansible-core` is enough.
If you do not wish to install *ansible* anywhere, remember it is already installed on the Jenkins VM so you can use it from there.

```bash
apt install ansible-core
```

## Clone the repository

After the issue has been accepted, clone the repository to your local machine using `git clone https://github.com/6G-SANDBOX/6G-Sandbox-Sites.git` in your terminal.

## Work on your changes

Before you start working on your changes, switch to your branch using `git switch <site_name>`. 

Decrypt the `core.yaml` file using the password you created in the toolkit installer step using the following command:

```sh
ansible-vault decrypt <site_name>/core.yaml --vault-password-file=path/to/password.txt
```

where:
    - `<site_name>/core.yaml` is the path to the file you want to encrypt.
    - `--vault-password-file=path/to/password.txt` is the path containing the password.

Edit the contents of the `core.yaml` file.

Save the changes.

## Submit your changes

Once you're happy with your changes, commit them with a clear and descriptive message using `git commit -m "Your message here"`.

Push your changes to the repository using `git push`.

The branch must include the **directory** with the same branch name and with the **core.yaml** file.