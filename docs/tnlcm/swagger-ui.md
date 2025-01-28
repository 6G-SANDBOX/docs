---
sidebar_position: 5
title: "Swagger UI"
sidebar_label: "Swagger UI"
draft: false
---

## Login

The API set forth in the TNLCM is as follows:

![api](../../static/img/tnlcm/api.png)

If it is the first time using the API it is necessary to create a user:

![register](../../static/img/tnlcm/register.png)

Once the user has been created or if it has been previously created, add the user and its password in the Basic Authorization section of the **Authorize** box:

![basicAuthorizarion](../../static/img/tnlcm/basicAuthorizarion.png)

Once the user has been added, an access token and its refresh token can be generated. This access token has a duration of one day (can be modified):

![obtainTokens](../../static/img/tnlcm/obtainTokens.png)

The next step is to add the token in the green **Authorize** box. It is required to put the word **Bearer**, a space and then the token. An example is shown:

![accessToken](../../static/img/tnlcm/accessToken.png)

Now, requests that involve having an access token can be made.

If the access token expires, it can be refreshed by using the refresh token. The token in the green **Authorize** box must be updated with the refresh token and the post request must be made:

![refreshToken](../../static/img/tnlcm/refreshToken.png)

When the request is made, it will return another access token that will need to be put back into the green **Authorize** box.

## Create Trial Network

Once logged into TNLCM, execute the POST request of the `trial-network` namespace:

![createTN](../../static/img/tnlcm/createTN.png)

Fill in the following fields:

- `tn_id`: must start with a character and be at least 4 characters long. This field can be left blank, in which case a random value will be generated.
- `deployment_site`: must be one of the sites available in the [6G-Sandbox-Sites](https://github.com/6G-SANDBOX/6G-Sandbox-Sites) repository.
- `library_reference_type`: you can specify a branch, tag, or commit of the 6G-Library repository.
- `library_reference_value`: value corresponding to the type specified in the `library_reference_type` field.
- `sites_reference_type`: you can specify a branch, tag, or commit of the 6G-Sandbox-Sites repository.
- `sites_reference_value`: value corresponding to the type specified in the `sites_reference_type` field.
- `descriptor`: descriptor file containing the definition of the trial network. To create a descriptor file, refer to the [Trial Network Descriptor Guide](https://github.com/6G-SANDBOX/TNLCM/wiki/Trial-Network-Descriptor-Guide) section.

## Deploy Trial Network

Once logged into TNLCM and the trial network has been created, execute the PUT request of the `trial-network` namespace:

![deployTN](../../static/img/tnlcm/deployTN.png)

Fill in the following fields:

- `jenkins_deploy_pipeline`: if nothing is specified, a pipeline will be created inside the TNLCM folder in Jenkins with the name `TN_DEPLOY_<tn_id>`. If specified, it will be checked if it exists in Jenkins and that there is nothing queued to execute.
- `tn_id`: the identifier of the trial network received in the [POST request](#create-trial-network).

## Destroy trial network

Once logged into TNLCM, the trial network has been created and the trial network has been deployed, execute the DELETE request to destroy a trial network:

![destroyTN](../../static/img/tnlcm/destroyTN.png)

Fill in the following fields:

- `jenkins_destroy_pipeline`: if nothing is specified, a pipeline will be created inside TNLCM folder in Jenkins with the name `TN_DESTROY_<tn_id>`. If specified, it will be checked if it exists in Jenkins and that there is nothing queued to execute.
- `tn_id`: the identifier of the trial network received in the [POST request](#create-trial-network).

## Purge trial network

Once logged into TNLCM, the trial network has been created, deployed and destroyed, execute the DELETE request to purge a trial network:

![purgeTN](../../static/img/tnlcm/purgeTN.png)

Fill in the following fields:

- `tn_id`: the identifier of the trial network received in the [POST request](#create-trial-network).
