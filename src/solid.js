// @ts-check
const jseslint = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const solidLinter = require('eslint-plugin-solid/configs/recommended');
import { resolve } from 'node:path';
import process from 'node:process';
const tseslint = require('typescript-eslint');

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 */

const project = resolve(process.cwd(), 'tsconfig.json');

export default tseslint.config(
  jseslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ['**/*.{ts,tsx,mdx}'],
    ...solidLinter,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: project,
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      globals: {
        JSX: true,
        NodeJS: true,
        browser: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'solid/reactivity': 'warn',
      'solid/no-destructure': 'warn',
      'solid/jsx-no-undef': 'error',
    },
  },
  {
    ignores: ['node_modules', 'fonts', '.ideas', 'dist', '.turbo', 'html', 'mjml'],
  }
);
