// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "6G-SANDBOX",
  tagline: "A Horizon-JU Funded Research Project",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://6G-SANDBOX.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "6G-SANDBOX", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  trailingSlash: false,
  
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    [
      "docusaurus-lunr-search",
      {
        languages: ["en"],
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/", // Serve the docs at the site's root
          lastVersion: "0.4.0",
          versions: {
            "0.4.0": {
              label: "0.4.0",
              path: "0.4.0",
              banner: "none",
            },
            current: {
              label: "0.4.X",
              path: "",
              banner: "unreleased",
            },
          },
        },
        // blog: {
        //   routeBasePath: '/',
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.svg",
      navbar: {
        title: "6G-SANDBOX",
        logo: {
          alt: "logo",
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
          href: "https://6g-sandbox.github.io/docs/",
          target: "_self"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "documentationSidebar",
            position: "left",
            label: "DOCS",
          },
          // {to: '/blog', label: 'BLOG', position: 'left'},
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/6G-SANDBOX",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository"
          },
          {
            href: "https://marketplace.mobilesandbox.cloud:9443/appliance",
            position: "right",
            className: "header-marketplace-link",
            "aria-label": "Marketplace",
            html: `
              <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                <svg class="marketplace-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="8" cy="21" r="1"/>
                  <circle cx="19" cy="21" r="1"/>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
              </div>
            `,
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://be.linkedin.com/in/6g-sandbox-project",
              },
              {
                label: "Website",
                href: "https://6g-sandbox.eu/",
              },
              {
                label: "X",
                href: "https://x.com/6GSANDBOX",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: "GitHub",
                href: "https://github.com/6G-SANDBOX",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 6G-SANDBOX. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        versionPersistence: "localStorage",
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: "new_release",
        content:
          "🚀 New release of documentation is available! Check it out <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://6g-sandbox.github.io/docs/0.4.0/introduction\">here</a>.",
        backgroundColor: "#fffae6",
        textColor: "#091E42",
        isCloseable: true,
      },
    }),
};

export default config;
