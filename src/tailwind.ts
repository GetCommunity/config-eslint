// @ts-check
import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
// @ts-expect-error - no types for eslint-plugin-tailwindcss
import tailwindcss from "eslint-plugin-tailwindcss"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
})

const tsTailwindConfig = [
  ...compat.extends("eslint:recommended", "plugin:tailwindcss/recommended"),
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
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off"
    }
  }
]

export default tsTailwindConfig
