// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const gcSolidJsEsConfig: ReturnType<typeof tseslint.config> = tseslint.config(
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

export default gcSolidJsEsConfig;
