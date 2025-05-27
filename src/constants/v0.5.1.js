// Sandbox Organization and Teams
export const SANDBOX_URL = "https://6g-sandbox.eu/";
export const SANDBOX_REPO_ORG = "https://github.com/6G-SANDBOX";
export const SANDBOX_REPO_TEAMS = "https://github.com/orgs/6G-SANDBOX/teams";
export const SANDBOX_REPO_TEAMS_SITES = `${SANDBOX_REPO_TEAMS}/6gsandbox-sites-contributors`;
// 6G Library
export const LIBRARY_REPO_URL = `${SANDBOX_REPO_ORG}/6G-Library`;
export const LIBRARY_REPO_VERSION = "0.5.1";
export const LIBRARY_REPO_TAG = `v${LIBRARY_REPO_VERSION}`;
export const LIBRARY_REPO_RELEASE = `${LIBRARY_REPO_URL}/releases/tag/${LIBRARY_REPO_TAG}`;
export const LIBRARY_GLOBAL = `${LIBRARY_REPO_URL}/blob/${LIBRARY_REPO_TAG}/.global`;
export const LIBRARY_GLOBAL_PAC = `${LIBRARY_GLOBAL}/pac`;
export const LIBRARY_GLOBAL_CAC = `${LIBRARY_GLOBAL}/cac`;
export const LIBRARY_GLOBAL_PAC_TN_DEPLOY = `${LIBRARY_GLOBAL_PAC}/TN_DEPLOY.groovy`;
export const LIBRARY_GLOBAL_PAC_TN_DESTROY = `${LIBRARY_GLOBAL_PAC}/TN_DESTROY.groovy`;
export const LIBRARY_GLOBAL_CAC_LOAD_VARIABLES = `${LIBRARY_GLOBAL_CAC}/load_variables.yaml`;
export const LIBRARY_COMPONENT_DUMMY_PUBLIC = `${LIBRARY_REPO_URL}/blob/${LIBRARY_REPO_TAG}/.dummy_component/.tnlcm/public.yaml`;
export const LIBRARY_COMPONENT_TN_INIT = `${LIBRARY_REPO_URL}/blob/${LIBRARY_REPO_TAG}/tn_init`;
export const LIBRARY_COMPONENT_TN_INIT_PUBLIC = `${LIBRARY_COMPONENT_TN_INIT}/.tnlcm/public.yaml`;
export const LIBRARY_COMPONENT_TN_INIT_PRIVATE = `${LIBRARY_COMPONENT_TN_INIT}/variables/one/private.yaml`;
export const LIBRARY_COMPONENT_ELCM = `${LIBRARY_REPO_URL}/blob/${LIBRARY_REPO_TAG}/elcm`;
export const LIBRARY_COMPONENT_ELCM_PUBLIC = `${LIBRARY_COMPONENT_ELCM}/.tnlcm/public.yaml`;
export const LIBRARY_COMPONENT_ELCM_PRIVATE = `${LIBRARY_COMPONENT_ELCM}/variables/one/private.yaml`;
// 6G Sandbox Sites
export const SITES_REPO_URL = `${SANDBOX_REPO_ORG}/6G-Sandbox-Sites`;
export const SITES_DUMMY_SITE = `${SITES_REPO_URL}/blob/main/.dummy_site/core.yaml`;
export const SITES_ACCESS_REQUEST_ISSUE = `${SITES_REPO_URL}/issues/new?q=is%3Aissue&template=access_request.md`;
// 6G Sandbox Marketplace
export const MARKETPLACE_URL = "https://marketplace.mobilesandbox.cloud:9443/appliance";
export const MARKETPLACE_SERVICE_TOOLKIT = `${MARKETPLACE_URL}/service_toolkit`;
export const MARKETPLACE_APPLIANCE_JENKINS = `${MARKETPLACE_URL}/service_jenkins`;
export const MARKETPLACE_APPLIANCE_TNLCM = `${MARKETPLACE_URL}/service_TNLCM`;
export const MARKETPLACE_APPLIANCE_UERANSIM = `${MARKETPLACE_URL}/service_UERANSIM`;
export const MARKETPLACE_REPO_URL = `${SANDBOX_REPO_ORG}/marketplace-community`;
export const APPMARKET_REPO_URL = `${SANDBOX_REPO_ORG}/appmarket-simple`;
// 6G Sandbox Documentation and Resources
export const DOCS_URL = "https://6g-sandbox.github.io/docs";
export const DOCS_CONTRIBUTING = `${DOCS_URL}/contributing`;
export const DOCS_REPO_URL = `${SANDBOX_REPO_ORG}/docs`;
export const DOCS_REPO_BUG_REPORT = `${DOCS_REPO_URL}/issues/new?assignees=&labels=&projects=&template=bug_report.md`;
export const DOCS_REPO_FEATURE_REQUEST = `${DOCS_REPO_URL}/issues/new?assignees=&labels=&projects=&template=feature_request.md`;
export const DOCUSAURUS_URL = "https://docusaurus.io/docs";
export const DOCUSAURUS_PLAYGROUND = `${DOCUSAURUS_URL}/playground`;
export const DBDIAGRAM = "https://dbdiagram.io/";
// Toolkit Installer
export const TOOLKIT_INSTALLER_REPO_URL = `${SANDBOX_REPO_ORG}/toolkit-installer`;
export const TOOLKIT_INSTALLER_REPO_VERSION = "0.5.1";
export const TOOLKIT_INSTALLER_REPO_TAG = `v${TOOLKIT_INSTALLER_REPO_VERSION}`;
export const TOOLKIT_INSTALLER_REPO_RELEASE = `${TOOLKIT_INSTALLER_REPO_URL}/releases/tag/${TOOLKIT_INSTALLER_REPO_TAG}`;
export const TOOLKIT_INSTALLER_INSTALL_SCRIPT = `https://raw.githubusercontent.com/6G-SANDBOX/toolkit-installer/${TOOLKIT_INSTALLER_REPO_TAG}/scripts/install.sh`;
// MinIO
export const MINIO_REPO_URL = "https://github.com/minio/minio";
export const MINIO_REPO_VERSION = "2024-10-02T17-50-41Z";
export const MINIO_REPO_TAG = `RELEASE.${MINIO_REPO_VERSION}`;
export const MINIO_REPO_RELEASE = `${MINIO_REPO_URL}/releases/tag/${MINIO_REPO_TAG}`;
// Jenkins
export const JENKINS_REPO_URL = "https://github.com/jenkinsci/jenkins";
export const JENKINS_REPO_VERSION = "2.492.1";
export const JENKINS_REPO_TAG = `jenkins-${JENKINS_REPO_VERSION}`;
export const JENKINS_REPO_RELEASE = `${JENKINS_REPO_URL}/releases/tag/${JENKINS_REPO_TAG}`;
export const JENKINS_URL = "https://www.jenkins.io";
export const JENKINS_LOGO = `${JENKINS_URL}/images/logos/jenkins/jenkins.png`;
export const JENKINS_INSTALLATION = `${JENKINS_URL}/doc/book/installing/linux`;
export const ANSIBLE_DOCS = "https://docs.ansible.com/ansible/latest";
export const ANSIBLE_INSTALLATION = `${ANSIBLE_DOCS}/installation_guide/installation_distros.html`;
export const ANSIBLE_PLAYBOOKS = `${ANSIBLE_DOCS}/playbook_guide/playbooks_intro.html`;
export const HASHICORP_TERRAFORM_BACKENDS_S3 = "https://developer.hashicorp.com/terraform/language/settings/backends/s3";
export const OPENNEBULA_TERRAFORM_PROVIDER = "https://registry.terraform.io/providers/OpenNebula/opennebula/latest/docs/resources/virtual_machine";
// TNLCM
export const TNLCM_REPO_VERSION = "0.5.1";
export const TNLCM_REPO_TAG = `v${TNLCM_REPO_VERSION}`;
export const TNLCM_BACKEND_REPO_URL = `${SANDBOX_REPO_ORG}/TNLCM`;
export const TNLCM_BACKEND_REPO_RELEASE = `${TNLCM_BACKEND_REPO_URL}/releases/tag/${TNLCM_REPO_TAG}`;
export const TNLCM_BACKEND_LOGO = `https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/${TNLCM_REPO_TAG}/docs/images/logo.png`;
export const TNLCM_BACKEND_DOTENV_TEMPLATE = `${TNLCM_BACKEND_REPO_URL}/blob/${TNLCM_REPO_TAG}/.env.template`;
export const TNLCM_BACKEND_SAMPLE_DESCRIPTORS = `${TNLCM_BACKEND_REPO_URL}/blob/${TNLCM_REPO_TAG}/sample_descriptors`;
export const TNLCM_BACKEND_SAMPLE_DESCRIPTORS_README = `${TNLCM_BACKEND_SAMPLE_DESCRIPTORS}/README.md`;
export const TNLCM_BACKEND_ELCM_TRIAL_NETWORK = `${TNLCM_BACKEND_SAMPLE_DESCRIPTORS}/elcm_loadcore_open5gs_vm.yaml`;
export const TNLCM_BACKEND_LOADCORE_TRIAL_NETWORK = `${TNLCM_BACKEND_SAMPLE_DESCRIPTORS}/loadcore_open5gs_vm.yaml`;
export const TNLCM_BACKEND_INSTALL_SCRIPT = `https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/${TNLCM_REPO_TAG}/scripts/install.sh`;
export const TNLCM_BACKEND_UPGRADE_SCRIPT = `https://raw.githubusercontent.com/6G-SANDBOX/TNLCM/${TNLCM_REPO_TAG}/scripts/upgrade.sh`;
export const TNLCM_FRONTEND_REPO_URL = `${SANDBOX_REPO_ORG}/TNLCM_FRONTEND`;
export const TNLCM_FRONTEND_INSTALL_SCRIPT = `https://raw.githubusercontent.com/6G-SANDBOX/TNLCM_FRONTEND/${TNLCM_REPO_TAG}/scripts/install.sh`;
export const TNLCM_FRONTEND_UPGRADE_SCRIPT = `https://raw.githubusercontent.com/6G-SANDBOX/TNLCM_FRONTEND/${TNLCM_REPO_TAG}/scripts/upgrade.sh`;
// UERANSIM
export const UERANSIM_REPO_URL = "https://github.com/aligungr/UERANSIM";
export const UERANSIM_LOGO = "https://raw.githubusercontent.com/aligungr/UERANSIM/master/.github/logo.png";
export const UERANSIM_WIKI = `${UERANSIM_REPO_URL}/wiki`;
// OpenNebula
export const OPENNEBULA_REPO_ORG = "https://github.com/OpenNebula";
export const ONE_REPO_URL = `${OPENNEBULA_REPO_ORG}/one`;
export const ONE_REPO_VERSION = "6.10.0";
export const ONE_REPO_TAG = `release-${ONE_REPO_VERSION}`;
export const ONE_REPO_RELEASE = `${ONE_REPO_URL}/releases/tag/${ONE_REPO_TAG}`;
export const ONE_DEPLOY_REPO_URL = `${OPENNEBULA_REPO_ORG}/one-deploy`;
export const ONE_DEPLOY_WIKI = `${ONE_DEPLOY_REPO_URL}/wiki`;
export const ONE_DEPLOY_WIKI_ARCH_SINGLE_CEPH = `${ONE_DEPLOY_WIKI}/arch_single_ceph`;
export const ONE_APPS_REPO_URL = `${OPENNEBULA_REPO_ORG}/one-apps`;
export const ONE_APPS_WIKI = `${ONE_APPS_REPO_URL}/wiki`;
export const ONE_APPS_WIKI_MINIO = `${ONE_APPS_WIKI}/minio_feature`;
export const ONE_DOCS = "https://docs.opennebula.io/stable";
export const ONE_DOCS_MANAGEMENT_OPERATIONS = `${ONE_DOCS}/management_and_operations`;
export const ONE_DOCS_MANAGEMENT_OPERATIONS_CONTEXT_SECTION = `${ONE_DOCS_MANAGEMENT_OPERATIONS}/references/template.html?highlight=context#context-section`;
