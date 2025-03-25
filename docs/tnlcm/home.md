---
sidebar_position: 1
title: "Home"
sidebar_label: "Home"
draft: false
---

Trial Network Lifecycle Manager (TNLCM) is a tool designed to manage the lifecycle of trial networks. Developed in Python, it automates the creation, deployment and management of temporary or test networks, streamlining the process of experimentation and validation in network development projects.

## Project structure

```
TNLCM/                       // main directory.
├─ .github/                  // directory contains files and templates for GitHub workflow automation.
├─ conf/                     // directory that handler the configuration files.
├─ core/                     // directory that the developed code is stored.
│  ├─ auth/                  // directory that handler the authentication of users who have access.
│  ├─ database/              // directory that handler the connection with MongoDB database using mongoengine.
│  ├─ exceptions/            // directory that handler the creation of custom exceptions.
│  ├─ jenkins/               // directory that handler the connection with Jenkins for tn deployment.
│  ├─ library/               // directory that handler the connection to the Library repository.
│  ├─ libs/                  // directory that handler the connection to the local libraries.
│  ├─ logs/                  // directory that handler the logs configuration.
│  ├─ models/                // directory that contains the database models.
│  ├─ routes/                // directory that handler the API that is exposed.
│  ├─ sites/                 // directory that handler the connection to the Sites repository.
│  └─ utils/                 // directory that handler data conversions and storage in YAML, Markdown and JSON formats.
├─ docs/                     // directory where documentation is stored.
├─ scripts/                  // directory contains scripts for automated deployments.
├─ tn_template_lib/          // directory that trial network descriptors templates are stored.
├─ .env.template             // file that contains placeholder environment variables for configuring the application.
├─ .gitignore                // file specifying intentionally untracked files to ignore.
├─ app.py                    // main file that starts TNLCM.
├─ CHANGELOG.md              // file containing the changes made in each release.
├─ pyproyect.toml            // file containing the libraries and their versions.
├─ ruff.toml                 // file containing the configuration for Ruff.
└─ uv.lock
```
