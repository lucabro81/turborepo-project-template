import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      n: path.resolve(__dirname, "./node_modules"),
    },
  },
});
