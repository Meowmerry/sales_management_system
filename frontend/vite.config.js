import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: "./postcss.config.js",
    },
    build: {
        outDir: "dist",
        sourcemap: false,
        minify: true,
    },
    server: {
        host: true,
        port: process.env.PORT || 3000,
    },
});
