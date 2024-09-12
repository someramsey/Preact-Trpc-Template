import preact from "@preact/preset-vite";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        preact({
            prerender: {
                enabled: true,
                renderTarget: "#app",
                additionalPrerenderRoutes: ["/404"],
                previewMiddlewareEnabled: true,
                previewMiddlewareFallback: "/404",
            },
        }),


    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        },
    },
});
