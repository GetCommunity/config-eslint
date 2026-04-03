import { defineConfig } from "tsdown"

export default defineConfig({
  entry: [
    "src/library.ts",
    "src/typescript.ts",
    "src/tailwind.ts",
    "src/solid.ts",
    "src/solid-tanstack.ts"
  ],
  format: ["cjs", "esm"],
  dts: true,
  // splitting: false,
  sourcemap: false,
  clean: true,
  target: "es2020"
})
