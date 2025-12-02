// @ts-check
import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import { Linter } from "eslint"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
})

const tsSolidJsConfig: Linter.Config<Linter.RulesRecord>[] = [
  ...compat.extends("eslint:recommended", "plugin:solid/recommended")
]

export default tsSolidJsConfig
