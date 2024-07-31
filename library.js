module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  globals: {
    JSX: true,
    NodeJS: true,
  },
  extends: ['eslint:recommended', 'typescript-eslint:recommended'],
};
