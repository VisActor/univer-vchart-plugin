import { defineConfig } from "vite";
import { univerPlugin } from "@univerjs/vite-plugin";
import path from "path";

export default defineConfig({
  plugins: [univerPlugin()],

  resolve: {
    alias: {
      "@visactor/univer-vchart-plugin": path.resolve(__dirname, "../src"),
    },
  },
});
