import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/ts/app.tsx', 'resources/ts/public.tsx'],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@ts/': '/resources/ts/',
    },
  },
});

// import { defineConfig } from "vite";
// import laravel from "laravel-vite-plugin";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [
//     laravel({
//       input: "resources/js/app.jsx",
//       refresh: true,
//     }),
//     react(),
//   ],
//   resolve: {
//     alias: { "@/": "/resources/js/" },
//   },
// });
