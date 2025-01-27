---
sidebar_position: 1
title: "Project Structure"
sidebar_label: "Project Structure"
draft: false
---

Toolkit Installer is a utility developed for the [6G-SANDBOX](https://6g-sandbox.eu/) project, designed to facilitate the creation of new platforms or sites. It streamlines the deployment process by automating the setup of required environments, configurations, and dependencies. This tool ensures consistency and reduces the complexity of initializing new 6G-SANDBOX sites, providing an efficient and user-friendly approach to managing site creation within the project's ecosystem.

```
toolkit-installer/           // main folder.
├─ .github/                  // folder contains files and templates for GitHub workflow automation.
├─ phases/                   // folder that the phases code is stored.
│  └─ utils/                 // folder that handler data conversions and storage in YAML, Markdown and JSON formats.
├─ docs/                     // folder where all documentation is stored.
├─ .env.template             // file that contains placeholder environment variables for configuring the application.
├─ .gitignore                // file specifying intentionally untracked files to ignore.
├─ CHANGELOG.md              // file containing the changes made in each release.
├─ installer.py              // main file that execute the toolkit.
├─ pyproyect.toml            // file containing the libraries and their versions.
└─ uv.lock
```