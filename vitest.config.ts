// vitest.config.ts
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      exclude: ["**/*.config.*", "**/config.*", "**/*.workspace.*"],
    },
  },
  plugins: [
    {
      name: "astropi-user-config",
      resolveId(id: any) {
        if (id === "virtual:astropi-user-config") {
          return "\0virtual:astropi-user-config"
        }
      },
    },
  ],
})
