---
sidebar_position: 10
title: "Contributing"
sidebar_label: "Contributing"
draft: false
---

## :hammer_and_wrench: How to contribute

### Set up your environment

- **Fork the repository**: fork the project to your GitHub account to have your own copy. To do this, click the "Fork" button at the top right of the repository page on GitHub. This will create a copy of the repository in your GitHub account.

    ```bash
    https://github.com/6G-SANDBOX/docs
    ```

- **Clone your fork**: after forking, clone the repository to your local machine. To do this, copy the URL of your fork by clicking the green "Code" button.

    ```bash
    git clone <URL of your fork>
    ```

- **Add the original repository as a remote**: to keep your fork updated with changes from the original repository, add the original repository as a remote.

    ```bash
    git remote add upstream <URL of the original repository>
    ```

### Add new section to the documentation

To add a new section to the documentation, follow these steps:

1. Create a branch from `main`. 

    1.1. The branch name should follow the format `feature/<section_name>`.

    1.2. The `<section_name>` should be meaningful.

    ```bash
    git switch -c feature/<section_name> main
    ```

2. Create a directory inside the [`docs`](./docs/) directory.

    2.1. The name of the directory must be `<section_name>`.

    2.2. If the directory name requires spaces, separate words using **-**.

3. Add files to the new directory `<section_name>`.

    3.1. Include a `_category_.json` file with the following structure:

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

    3.2. Add as many markdown files as required for the new documentation section. Each markdown file must begin with the following structure:

    ```markdown
    ---
    sidebar_position: 1
    title: "<title>"
    sidebar_label: "<sidebar_label>"
    draft: false
    ---
    ```

    3.3. The first heading level in the markdown file should be **##**. Please avoid using **#**.

    3.4. If the markdown file name requires spaces, separate words using **-**.

    3.5. If the documentation requires images, create a directory named `<section_name>` inside the [`img`](./static/img/) directory.

4. You can test the rendering of your documentation locally or by using [tools](https://docusaurus.io/docs/playground) provided by Docusaurus. Refer to the [README](https://github.com/6G-SANDBOX/docs/blob/main/README.md) file for more information.

5. Commit the changes to your branch.

    ```bash
    git add .
    git commit -m "Add new <section_name> section to the documentation"
    ```

6. Push the changes to your fork.

    ```bash
    git push origin feature/<section_name>
    ```

7. Create a pull request on GitHub, go to your docs fork and click "Pull request" to start one. The pull request should be from your branch to the `main` branch of the original repository.

    8.1. Include **@CarlosAndreo** or **alvarocurt** as a reviewer.

    8.2. The pull request must include:
    
    * The **new section directory** inside docs directory.
    * The **images of the new section** inside img directory (if required).

8. Once the pull request has been reviewed, the changes will be merged into the `main` branch of the original repository.

### Update documentation section

To update a documentation section, follow these steps:

1. Create a branch from `main`. 

    1.1. The branch name should follow the format `fix/<section_name>`.

    1.2. The `<section_name>` must be a directory that must exist in the documentation.

    ```bash
    git switch -c fix/<section_name> main
    ```

2. Update the directory created inside the [`docs`](./docs/) directory.

3. You can test the rendering of your documentation locally or by using [tools](https://docusaurus.io/docs/playground) provided by Docusaurus. Refer to the [README](https://github.com/6G-SANDBOX/docs/blob/main/README.md) file for more information.

4. Commit the changes to your branch.

    ```bash
    git add .
    git commit -m "Fix <section_name> section documentation"
    ```

5. Push the changes to your fork.

    ```bash
    git push origin fix/<section_name>
    ```

6. Create a pull request on GitHub, go to your docs fork and click "Pull request" to start one. The pull request should be from your branch to the `main` branch of the original repository.

    8.1. Include **@CarlosAndreo** or **alvarocurt** as a reviewer.

    8.2. The pull request must include:
    
    * The **section directory** updated inside docs directory.
    * The **images of the section** inside img directory (if required).

7. Once the pull request has been reviewed, the changes will be merged into the `main` branch of the original repository.