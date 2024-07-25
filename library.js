// @ts-check
import * as babelParser from '@babel/eslint-parser';
import jseslint from '@eslint/js';
import { resolve } from 'node:path';
import process from 'node:process';
import tseslint from 'typescript-eslint';

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
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        project: project,
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      },
      globals: {
        JSX: true,
        NodeJS: true
      }
    }
  },
  {
    ignores: ['node_modules', 'fonts', '.ideas', 'dist', '.turbo', 'html', 'mjml']
  }
);
