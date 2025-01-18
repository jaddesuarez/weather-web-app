import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@configs": path.resolve(__dirname, "./src/lib/configs"),
      "@services": path.resolve(__dirname, "./src/lib/services"),
      "@utils": path.resolve(__dirname, "./src/lib/utils"),
      "@locales": path.resolve(__dirname, "./src/lib/locales"),
      "@components": path.resolve(__dirname, "./src/ui/components"),
      "@constants": path.resolve(__dirname, "./src/lib/constants"),
    },
  },
});
