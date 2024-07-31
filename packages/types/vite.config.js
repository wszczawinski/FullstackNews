import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: { entry: resolve(__dirname, "src/main.ts"), formats: ["es"] },
    },
    plugins: [dts()],
});
