/*
  0 - off,
  1 - warning,
  2 - error
*/

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'airbnb-base',
  ],
  plugins: [
    'simple-import-sort',
    'react-hooks',
    'flowtype',
    'jsx-a11y',
    'import',
    'react',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': [0],
    'no-console': [1, { allow: ['info', 'warn', 'error'] }],
    'max-len': [1, { code: 120, ignoreComments: true }],
    'simple-import-sort/imports': [1],
    'simple-import-sort/exports': [1],
    'comma-dangle': [1, 'always-multiline'],
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'react-hooks/exhaustive-deps': [0],
  },
};
