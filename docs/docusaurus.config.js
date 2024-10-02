// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Isabel Maria Cruz Lorite',
  tagline: 'Página web personal de Isabel Maria Cruz Lorite',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cruzlorite.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/isabelmariacruzlorite/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IsaLorito', // Usually your GitHub org/user name.
  projectName: 'isabelmariacruzlorite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // formacion: {
        //   sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Isabel Maria Cruz Lorite',
        logo: {
          alt: 'Isabel Maria Cruz Lorite',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Perfil Profesional',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Inicio',
            items: [
              {
                label: 'Inicio',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Perfiles personales',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/isalorito/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100069341285469',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/IsaLorito',
              },
            ],
          },
          {
            title: 'Perfiles profesionales',
            items: [
               {
                label: 'ORCID',
                href: 'https://orcid.org/my-orcid?orcid=0000-0002-6099-134X',
              },
              {
                label: 'Pure - UNIC',
                href: 'https://pure.unic.ac.cy/en/persons/isabel-mar%C3%ADa-cruz-lorite',
              },
              {
                label: 'Research Gate',
                href: 'https://www.researchgate.net/profile/Isabel-Maria-Cruz-Lorite',
              },
              {
                label: 'Google Scholar',
                href: 'https://scholar.google.es/citations?user=2WYXuEQAAAAJ&hl=en',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
