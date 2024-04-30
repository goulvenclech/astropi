// vitest.config.ts
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      exclude: ["**/*.config.*", "**/config.*", "**/*.workspace.*"],
    },
  },
})
