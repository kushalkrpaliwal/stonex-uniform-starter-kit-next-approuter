// @ts-ignore
import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // '@storybook/addon-links',
    // 'storybook-addon-themes',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    const { module = {}, resolve = {} } = config;
    const { alias = {}, fallback = {} } = resolve;

    return {
      ...config,
      resolve: {
        ...resolve,
        alias: {
          ...alias,
          '@': path.resolve(__dirname, '../src/'),
        },
        fallback: {
          ...fallback,
          zlib: false,
          fs: false,
          stream: false,
          os: false,
        },
      },
    };
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
