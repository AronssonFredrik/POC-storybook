module.exports = {
  stories: ['../src/stories/**/*.stories.@(ts|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y'
  ],
};