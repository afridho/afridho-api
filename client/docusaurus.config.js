// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
var baseUrlIgDownloader = 'http://afridho-api.vercel.app/api/ig';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'afridho-api',
    tagline: 'Dinosaurs are cool',
    url: 'https://afridho-api.vercel.app',
    baseUrl: '/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'ignore',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'afridho', // Usually your GitHub org/user name.
    projectName: 'afridho-api', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/afridho/afridho-api/blob/master/client/',
                },
                blog: false,
                // blog: {
                //   showReadingTime: true,
                //   // Please change this to your repo.
                //   // Remove this to remove the "edit this page" links.
                //   editUrl:
                //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                disableSwitch: true,
                respectPrefersColorScheme: true,
            },
            docs: {
                sidebar: {
                    hideable: true,
                },
            },
            navbar: {
                title: 'afridho-api',
                logo: {
                    alt: 'afridho-api',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    // {to: baseUrlIgDownloader, label: 'Instagram Downloader', position: 'left'},
                    {
                        href: 'https://github.com/afridho/afridho-api',
                        label: 'GitHub Repository',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                // links: [
                //   {
                //     title: 'Docs',
                //     items: [
                //       {
                //         label: 'Tutorial',
                //         to: '/docs/intro',
                //       },
                //     ],
                //   },
                //   {
                //     title: 'Community',
                //     items: [
                //       {
                //         label: 'Stack Overflow',
                //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //       },
                //       {
                //         label: 'Discord',
                //         href: 'https://discordapp.com/invite/docusaurus',
                //       },
                //       {
                //         label: 'Twitter',
                //         href: 'https://twitter.com/docusaurus',
                //       },
                //     ],
                //   },
                //   {
                //     title: 'More',
                //     items: [
                //       {
                //         label: 'Blog',
                //         to: '/blog',
                //       },
                //       {
                //         label: 'GitHub',
                //         href: 'https://github.com/facebook/docusaurus',
                //       },
                //     ],
                //   },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} afridho-api. All rights reserved.`,
            },
            prism: {
                theme: lightTheme,
                darkTheme: darkTheme,
                additionalLanguages: ['bash', 'diff', 'json'],
            },
        }),
};

module.exports = config;
