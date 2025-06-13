import path from "path";
import { defineConfig } from "vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react()],
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
