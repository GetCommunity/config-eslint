// @ts-check

import eslint from '@eslint/js';
import { Linter } from '@typescript-eslint/utils/ts-eslint';
import tseslint from 'typescript-eslint';

const gcLibEsConfig: Linter.ConfigType = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  }
);

export default gcLibEsConfig;
