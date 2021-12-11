module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-essentials',
    'storybook-addon-next-router'
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react'
}
