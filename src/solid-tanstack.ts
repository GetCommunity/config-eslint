import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import tsParser from "@typescript-eslint/parser"
import { Linter } from "eslint"
// @ts-expect-error - no types for eslint-plugin-tailwindcss
import tailwindcss from "eslint-plugin-tailwindcss"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const tsSolidTanstackConfig: Linter.Config<Linter.RulesRecord>[] = [
  {
    ignores: ["**/*.config.*", "**/*.json", "**/lib/ui/*.tsx"]
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:solid/recommended",
    "plugin:tailwindcss/recommended"
  ),
  {
    plugins: {
      tailwindcss
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        config: "tailwind.config.mjs"
      }
    },

    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ],
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

export default tsSolidTanstackConfig
