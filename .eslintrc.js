module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArrowFunction: true,
      },
    ],
    'react/display-name': 'off',
  },
};
