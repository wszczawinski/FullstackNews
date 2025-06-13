import path from "path";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174
  },
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@packages/ui": path.resolve(__dirname, "../../packages/ui/src/main.ts"),
      "@packages/types": path.resolve(
        __dirname,
        "../../packages/types/src/main.ts"
      ),
    },
  },
});
