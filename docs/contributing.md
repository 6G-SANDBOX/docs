---
title: "Contributing to documentation"
sidebar_label: "Contributing"
draft: false
---

## Set up your environment

### Fork the repository

Fork the project to your GitHub account to have your own copy. To do this, click the "Fork" button at the top right of the repository page on GitHub. This will create a copy of the repository in your GitHub account.

```bash
https://github.com/6G-SANDBOX/docs
```

### Clone your fork

After forking, clone the repository to your local machine. To do this, copy the URL of your fork by clicking the green "Code" button.

```bash
git clone <URL of your fork>
```

### Add the original repository as a remote

To keep your fork updated with changes from the original repository, add the original repository as a remote.

```bash
git remote add upstream <URL of the original repository>
```

## Add new section to the documentation

To add a new section to the documentation, follow these steps:

### Create a branch from `main`

- The branch name should follow the format `feature/<section_name>`.
- The `<section_name>` should be meaningful.

```bash
git switch -c feature/<section_name> main
```

### Create a directory inside the [`docs`](./docs/) directory

- The name of the directory must be `<section_name>`.
- If the directory name requires spaces, separate words using **-**.

### Add files to the new directory `<section_name>`

- Include a `_category_.json` file with the following structure:

```json
{
    "position": <next_position>,
    "label": "<section_name>",
    "collapsible": true,
    "collapsed": true,
    "className": "red",
    "link": {
        "type": "generated-index",
        "title": "<section_name> Overview"
    },
    "customProps": {
        "description": ""
    }
}
```

- Add as many markdown files as required for the new documentation section. Each markdown file must begin with the following structure:

```markdown
---
sidebar_position: 1
title: "<title>"
sidebar_label: "<sidebar_label>"
draft: false
---
```

- The first heading level in the markdown file should be **##**. Please avoid using **#**.
- If the markdown file name requires spaces, separate words using **-**.
- If the documentation requires images, create a directory named `images` inside the `<section_name>` directory.

### Test the rendering of your documentation

You can do it locally or by using [tools](https://docusaurus.io/docs/playground) provided by Docusaurus. Refer to the [README](https://github.com/6G-SANDBOX/docs/blob/main/README.md) file for more information.

### Commit the changes to your branch

```bash
git add .
git commit -m "Add new <section_name> section to the documentation"
```

### Push the changes to your fork

```bash
git push origin feature/<section_name>
```

### Create a pull request on GitHub

Go to your docs fork and click "Pull request" to start one. The pull request should be from your branch to the `main` branch of the original repository.

- Include **@CarlosAndreo** or **@alvarocurt** as a reviewer.
- The pull request must include:
  - The **new section directory** inside docs directory.
  - The **images of the new section** inside `<section_name>` directory (if required).

Once the pull request has been reviewed, the changes will be merged into the `main` branch of the original repository.

## Update documentation section

To update a documentation section, follow these steps:

### Create a branch from `main`

- The branch name should follow the format `fix/<section_name>`.
- The `<section_name>` must be a directory that must exist in the documentation.

```bash
git switch -c fix/<section_name> main
```

### Update the directory created inside the [`docs`](./docs/) directory

Maintaining the structure.

### Test the rendering of your documentation

You can do it locally or by using [tools](https://docusaurus.io/docs/playground) provided by Docusaurus. Refer to the [README](https://github.com/6G-SANDBOX/docs/blob/main/README.md) file for more information.

### Commit the changes to your branch

```bash
git add .
git commit -m "Fix <section_name> section documentation"
```

### Push the changes to your fork

```bash
git push origin fix/<section_name>
```

### Create a pull request on GitHub

Go to your docs fork and click "Pull request" to start one. The pull request should be from your branch to the `main` branch of the original repository.

- Include **@CarlosAndreo** or **@alvarocurt** as a reviewer.
- The pull request must include:
  - The **section directory** updated inside docs directory.
  - The **images of the section** inside `<section_name>` directory (if required).

Once the pull request has been reviewed, the changes will be merged into the `main` branch of the original repository.
