import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), require('tailwind-scrollbar-hide')],

  server: {
    port: 4000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    // https: {
    //   key: './path/to/server.key',
    //   cert: './path/to/server.crt',
    // },
  },
});
