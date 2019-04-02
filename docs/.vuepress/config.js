module.exports = {
  base: '/modulist-css/',
  title: 'Modulist CSS',
  description: 'Vue components for the Modulist Design System',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Github', link: 'http://www.github.com/simplystack/modulist-css/' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          'introduction/guide'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          'components/',
          'components/avatar',
          'components/badge',
          'components/box',
          'components/button',
          'components/checkbox',
          'components/modal',
          'components/input',
          'components/pagination',
          'components/progress',
          'components/radio',
          'components/select-native',
          'components/spinner',
          'components/table',
          'components/tabs',
          'components/textarea',
          'components/toggle',
        ]
      },
      {
        title: 'Support',
        collapsable: false,
        children: [
          'support/',
          'support/colors',
          'support/spacing',
          'support/typography',
        ],
      },
      {
        title: 'Utilities',
        collapsable: false,
        children: [
          'utilities/',
          'utilities/box-shadow',
          'utilities/grid',
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true
  },
  postcss: {
    plugins: [
      require('autoprefixer'),
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-preset-env')({
        features: {
          'custom-media-queries': true,
          'custom-properties': false,
        },
      }),
      require('cssnano')({ preset: 'default' }),
    ],
  },
};
