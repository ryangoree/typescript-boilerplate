/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    alias: {
      "#/": "/src/",
    },
    coverage: {
      include: ["src/**/*"],
    },
  },
});
