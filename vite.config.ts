import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Vertex Nexus",
        short_name: "Vertex",
        description:
          "Custom software and web app development services by Nexus Vertex.",
        theme_color: "#005DFF",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        orientation: "portrait",
        icons: [
          {
            src: "/pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/homePc.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
            label: "Home Page of Vertex Nexus",
          },
          {
            src: "/screenshots/homeMobile.png",
            sizes: "720x1280",
            type: "image/png",
            form_factor: "narrow",
            label: "Home Page of Vertex Nexus",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],
});
