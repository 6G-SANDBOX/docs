---
sidebar_position: 2
title: "Marketplace"
sidebar_label: "Marketplace"
draft: false
---

## How to build your own marketplace

To create your own marketplace, you need to follow these steps:

1. Install yarn

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
apt-get update
apt-get install -y yarn
```

2. Clone the [OpenNebula appmarket-simple repository](https://github.com/OpenNebula/appmarket-simple.git)

```bash
git clone https://github.com/OpenNebula/appmarket-simple.git /opt/appmarket-simple
```

3. Install the dependencies

```bash
yarn --cwd /opt/appmarket-simple/src/public/react/ install
```

4. Comment line 2 and uncomment line 1 to `src/public/react/src/constants/endpoints.js`

5. Build the frontend

```bash
yarn --cwd /opt/appmarket-simple/src/public/react/ build
```
