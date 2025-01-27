---
sidebar_position: 1
title: "Project Structure"
sidebar_label: "Project Structure"
draft: false
---

Trial Network Lifecycle Manager (TNLCM) is a tool designed to manage the lifecycle of trial networks. Developed in Python, it automates the creation, deployment and management of temporary or test networks, streamlining the process of experimentation and validation in network development projects.

```
TNLCM/                       // main folder.
├─ .github/                  // folder contains files and templates for GitHub workflow automation.
├─ conf/                     // folder that handler the configuration files.
├─ core/                     // folder that the developed code is stored.
│  ├─ auth/                  // folder that handler the authentication of users who have access.
│  ├─ callback/              // folder that handler the callback received by Jenkins.
│  ├─ cli/                   // folder that handler the cli for run commands.
│  ├─ database/              // folder that handler the connection with MongoDB database using mongoengine.
│  ├─ exceptions/            // folder that handler the creation of custom exceptions.
│  ├─ jenkins/               // folder that handler the connection with Jenkins for tn deployment.
│  ├─ logs/                  // folder that handler the logs configuration.
│  ├─ mail/                  // folder that handler the configuration to use flask mail library.
│  ├─ models/                // folder that contains the database models.
│  ├─ repository/            // folder that handler the connection to any repository.
│  ├─ routes/                // folder that handler the API that is exposed.
│  ├─ library/               // folder that handler the connection to the Library repository.
│  ├─ sites/                 // folder that handler the connection to the Sites repository.
│  └─ utils/                 // folder that handler data conversions and storage in YAML, Markdown and JSON formats.
├─ docs/                     // folder where all documentation is stored.
├─ scripts/                  // folder contains scripts for automated deployments.
├─ tn_template_lib/          // folder that trial network descriptors templates are stored.
├─ .env.template             // file that contains placeholder environment variables for configuring the application.
├─ .gitignore                // file specifying intentionally untracked files to ignore.
├─ app.py                    // main file that starts TNLCM.
├─ CHANGELOG.md              // file containing the changes made in each release.
├─ pyproyect.toml            // file containing the libraries and their versions.
└─ uv.lock
```