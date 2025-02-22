// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '6G-SANDBOX',
  tagline: 'A Horizon-JU Funded Research Project',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://6G-SANDBOX.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '6G-SANDBOX', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  trailingSlash: false,
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    [
      'docusaurus-lunr-search',
      {
        languages: ['en'],
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.4.X',
              path: '',
              banner: 'unreleased',
            },
            // "0.4.0": {
            //   label: '0.4.0',
            //   path: '0.4.0',
            //   banner: 'none',
            // },
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
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: '6G-SANDBOX',
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: 'https://6g-sandbox.github.io/docs/',
          target: '_self'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'DOCS',
          },
          // {to: '/blog', label: 'BLOG', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/6G-SANDBOX',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://be.linkedin.com/in/6g-sandbox-project',
              },
              {
                label: 'Website',
                href: 'https://6g-sandbox.eu/',
              },
              {
                label: 'X',
                href: 'https://x.com/6GSANDBOX',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/6G-SANDBOX',
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
        versionPersistence: 'localStorage',
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'new_release',
        content:
          '🚀 New release of toolkit installer is available! Check it out <a target="_blank" rel="noopener noreferrer" href="https://6g-sandbox.github.io/docs/toolkit-installer/installation">here</a>.',
        backgroundColor: '#fffae6',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),
};

export default config;
