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
          lastVersion: "1.0.0",
          versions: {
            current: {
              label: "Canary 🚧",
              path: "next",
              banner: "unreleased",
            },
            "1.0.0": {
              label: "1.0.0",
              path: "",
              banner: "none",
            },
            "0.5.1": {
              label: "0.5.1",
              path: "",
              banner: "none",
            },
            "0.5.0": {
              label: "0.5.0",
              path: "0.5.0",
              banner: "none",
            },
            "0.4.0": {
              label: "0.4.0",
              path: "0.4.0",
              banner: "none",
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
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
                  <path d="M2 7h20"/>
                  <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/>
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
          "🎉️ <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/6G-SANDBOX/TNLCM/releases/tag/v0.5.1\">TNLCM v0.5.1</a>, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/6G-SANDBOX/toolkit-installer/releases/tag/v0.5.1\">toolkit-installer v0.5.1</a> and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/6G-SANDBOX/6G-Library/releases/tag/v0.5.1\">6G-Library v0.5.1</a> are out. 🎉️",
        backgroundColor: "#fffae6",
        textColor: "#091E42",
        isCloseable: true,
      },
    }),
};

export default config;
