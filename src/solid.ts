// @ts-check
import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
})

const tsSolidJsConfig = [
  ...compat.extends("eslint:recommended", "plugin:solid/recommended")
]

export default tsSolidJsConfig
