// @ts-check
const babelParser = require('@babel/eslint-parser');
import { resolve } from 'node:path';
import process from 'node:process';
const jseslint = require('@eslint/js');
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
