---
sidebar_position: 3
title: "Getting Started Locally"
sidebar_label: "Getting Started Locally"
draft: false
---

## Set up the environment

### Fork the repository

Fork the project to your GitHub account to have your own copy. To do this, click the "Fork" button at the top right of the repository page on GitHub. This will create a copy of the repository in your GitHub account.

### Clone your fork

After forking, clone the repository to your local machine. To do this, copy the URL of your fork by clicking the green "Code" button, then run `git clone <URL of your fork>` in your terminal.

### Add the original repository as a remote

To keep your fork updated with changes from the original repository, add the original repository as a remote. You can do this by running `git remote add upstream <URL of the original repository>`.

## Work on your changes

### Sync the fork

You can do this from `github.com/your-username/your-toolkit-installer-repository` by clicking on `Sync fork`. Alternatively, you can do it from the terminal with `gh repo sync -b main` or `git switch main && git fetch upstream && git merge upstream/main`. More information is available in the [official GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

### Create a new branch

Before you start working on your changes, create a new branch using `git switch -c <site_name> main`. 

:::important
Your branch name should be the new site name.
:::

:::tip
Your site name should be a simple string made of **lowercase** characters and numbers.
:::

### Develop your changes

In the newly created branch, you must:
- Delete the `README.md` file that was added.
- Rename the `.dummy_site/` directory to match the name of the branch.
- Edit the contents of the `core.yaml` file located in the renamed directory with the corrected information.

## Encrypt your site file

This section aims to serve as a guide on how to fill your site's `core.yaml` file.

### Install ansible-core

To use the `ansible-vault` tool, the full *ansible* libraries and binaries are not needed. You can [install ansible](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.html) in your prefered way, but package `ansible-core` is enough.
If you do not wish to install *ansible* anywhere, remember it is already installed on the Jenkins VM so you can use it from there.

```bash
apt install ansible-core
```

### Set a password to encrypt/decrypt

Your password should be a random string of characters stored in a file with extension **.txt**.

:::caution
Try to avoid scapable special characters as ", ', `, ´, #, $, &,...

Unpredictable errors might happen.
:::

:::tip
Typical recommendations are:

- String size: >=20
- Uppercase letters (A-Z)
- Lower case letters (a-z)
- Numbers (0-9)
- Special characters (excluding scapable special characters)

You can use any [online password generator](https://www.random.org/strings/) to create it.
:::

:::important
Save the .txt file with the password and do not lose it.
:::

### Encrypt your file

```sh
ansible-vault encrypt <site_name>/core.yaml --vault-password-file=path/to/password.txt
```

where:

- `<site_name>/core.yaml` is the path to the file you want to encrypt.
- `--vault-password-file=path/file_name.txt` is the path containing the password.

Running this command will **replace** the original contents of the file with the encrypted text.

With the same syntaxt, you can use other `ansible-vault` commands to edit your encrypted file:
- `ansible-vault edit`: open the file to correct its unencrypted content.
- `ansible-vault decrypt`: decrypt the content of the file, replacing the encrypted text with the unencrypted one.

## Submit your changes

### Commit your changes

Once you're happy with your changes, commit them with a clear and descriptive message.

### Push to your fork

Push your branch with the changes to your fork on GitHub using `git push origin your-branch-name`.

### Create a Pull Request (PR)

On GitHub, go to your fork of the toolkit installer and click "Pull request" to start one. Make sure to clearly describe the changes you've made and why they are necessary or useful for the project.