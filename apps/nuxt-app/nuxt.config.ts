// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "path";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: "/api",
    },
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../../packages/elements/@"),
      },
    },
  },
});
