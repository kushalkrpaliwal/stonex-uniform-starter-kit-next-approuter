// @ts-ignore
import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '../storybook-addons/storybook-brand-theme-switcher/src/register',
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
