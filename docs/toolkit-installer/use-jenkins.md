---
sidebar_position: 4
title: "Use Jenkins"
sidebar_label: "Use Jenkins"
draft: false
---

Jenkins is an open-source automation server used to build, test, and deploy software projects, enabling continuous integration and delivery (CI/CD). It supports a wide range of plugins to integrate with various tools and streamline development workflows.

## How to login

The Jenkins server is enabled on port 8080 of the machine on which it is deployed.

To access it, the credentials provided at the time of deploying the toolkit are used.

Once you access to the Jenkins dashboard you will see two main pipelines which are `TN_DEPLOY` and `TN_DESTROY`. There may be more pipelines, but the main ones are these two.

## How to clone pipeline

Create your own pipeline to test your components. It is achieved by cloning the `TN_DEPLOY` pipeline. The steps to follow are:

- Select new task.
- Enter an item name. The name of the pipeline must be a clear name. It is recommended to put `TN_DEPLOY_<personName>`.
- Fill in the `Copy from` field with the name `TN_DEPLOY`.
- Select ok.
- In the configuration section do **not touch anything** and select save.

## How to deploy component

Once the pipeline has been cloned, you can proceed to deploy components by following these steps:

- Access the pipeline and on the left side go to the `Build with Parameters` section.
- Fill in the fields:
  - `TN_ID`: the identifier of the trial network. If your component requires the deployment of different components previously, you must indicate the same tn_id in each deployment. For example: if you want to deploy the ELCM component. The ELCM component of the 6G-Library requires to have previously deployed the tn_init component. Let's imagine that the trial network identifier is test. First you need to deploy the tn_init component with tn_id test and then the ELCM component with tn_id test.
  - `COMPONENT_TYPE`: is the type of component being deployed. This component has to be developed in the [6G-Library](https://github.com/6G-SANDBOX/6G-Library).
  - `CUSTOM_NAME`: custom name for the component inside the trial network.
  - `DEPLOYMENT_SITE`: the site where the component is to be deployed. It has to be a site that is developed in the repository [6G-Sandbox-Sites](https://github.com/6G-SANDBOX/6G-Sandbox-Sites).
  - `TNLCM_CALLBACK`: you can leave the default value.
  - `LIBRARY_URL`: 6G-Library repository HTTPS URL.
  - `LIBRARY_BRANCH`: you can specify a branch, commit or tag of the 6G-Library in which your component is developed. Valid inputs can be refs/heads/\<branchName\>, refs/tags/\<tagName\> or \<commitId\>.
  - `SITES_URL`: 6G-Sandbox-Sites repository HTTP URL.
  - `SITES_BRANCH`: you can specify a branch, commit or tag of 6G-Sandbox-Sites with your platform. Valid inputs can be refs/heads/\<branchName\>, refs/tags/\<tagName\> or \<commitId\>.
  - `DEBUG`: flag for debug your component.
  - `FILE`: file in yaml format in which you must indicate the mandatory fields specified in the input section of the [public.yaml](https://github.com/6G-SANDBOX/6G-Library/blob/main/.dummy_component/.tnlcm/public.yaml) file of the component in the 6G-Library.

## Example

In this example I am going to show how to deploy the [ELCM](https://github.com/6G-SANDBOX/6G-Library/tree/main/elcm) component of the 6G-Library:

As mentioned above, the first thing needed for elcm is to deploy the tn_init component:

![tnInit](../../static/img/toolkit-installer/tnInit.png)

Once the deployment time has elapsed, the elcm component is deployed:

In this case, the component [input](https://github.com/6G-SANDBOX/6G-Library/blob/main/elcm/.tnlcm/public.yaml) fields are not required since the required_when is set to false in all fields. This indicates that it takes the values specified by default in the file [private.yaml](https://github.com/6G-SANDBOX/6G-Library/blob/main/elcm/variables/one/private.yaml). However, you can modify the values by passing the yaml file to it. Let's set these values:

```yaml
one_elcm_influxdb_user: "elcm"
one_elcm_influxdb_password: "elcm"
one_elcm_influxdb_database: "db"
one_elcm_grafana_password: "elcm"
```

![elcm](../../static/img/toolkit-installer/elcm.png)