import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/library.ts", "src/typescript.ts", "src/solid.ts", "src/tailwind.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true
})
