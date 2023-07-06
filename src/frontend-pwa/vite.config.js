import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      // excludeAssets: [
      //   '/mapTiles/**', // Exclude files from the precache
      // ],
      // injectRegister: 'auto',
      includeAssets: ["**/*"],
      workbox: {
        importScripts: ["sw-code.js"],
        globPatterns: ["**/*"],
        cleanupOutdatedCaches: true,
        sourcemap: true,
      },
      manifest: {
        name: "Wayfinder",
        short_name: "Wayfinder",
        description: "A service and location finder for the BC Government",
        theme_color: "#003366",
        start_url: "/",
      
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      injectRegister: 'script',
      injectRegisterOptions: {
        // swSrc: './src/service-worker.js',
        // swSrc: './src/frontend-pwa/dist/sw.js',
        exclude: [
          '/mapTiles/**', // Designate the entire folder for exclusion
        ],
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  }
})
