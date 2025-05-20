// @ts-check

import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import tsParser from "@typescript-eslint/parser"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
})

const tsLibConfig = [
  {
    ignores: ["**/*.config.*", "**/*.json"]
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser
    }
  }
]

export default tsLibConfig
