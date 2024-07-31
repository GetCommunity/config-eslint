import * as jseslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import { ESLint } from 'eslint';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import * as tseslint from 'typescript-eslint';

const project: string = resolve(cwd(), 'tsconfig.json');

export default tseslint.config(
  jseslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
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
      },
    },
    rules: {},
  },
  {
    ignores: ['node_modules', 'fonts', '.ideas', 'dist', '.turbo', 'html', 'mjml'],
  }
) as ESLint.ConfigData;
