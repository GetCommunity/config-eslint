// @ts-check
import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import tsParser from "@typescript-eslint/parser"
import path from "path"
import { fileURLToPath } from "url"
// @ts-expect-error - no types for eslint-plugin-tailwindcss
import tailwindcss from "eslint-plugin-tailwindcss"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
})

const tsTailwindConfig = [
  {
    ignores: ["**/*.config.*", "**/*.json", "**/lib/ui/*.tsx"]
  },
  ...compat.extends("plugin:tailwindcss/recommended"),
  {
    plugins: {
      tailwindcss
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        config: "tailwind.config.cjs"
      }
    },
    rules: {
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off"
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser
    }
  }
]

export default tsTailwindConfig
