module.exports = [
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
    },
    files: ['**/*.{ts,tsx,mdx}'],
    plugins: ['solid'],
    extends: [
      'eslint:recommended',
      'typescript-eslint:recommended',
      'plugin:solid/typescript',
    ],
  },
];
