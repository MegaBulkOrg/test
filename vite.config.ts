// https://vite.dev/config/

import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { lessonsManifestPlugin } from "./vite/plugins/lessonsManifest";

export default defineConfig({
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "./src/assets"),
      StateManager: path.resolve(__dirname, "./src/redux"),
      Pages: path.resolve(__dirname, "./src/pages"),
      Components: path.resolve(__dirname, "./src/components"),
      Styles: path.resolve(__dirname, "./src/styles"),
      Shared: path.resolve(__dirname, "./src/shared"),
    },
  },
  publicDir: "src/assets",
  plugins: [react(), lessonsManifestPlugin()],
});
