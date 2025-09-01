import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
  base: '/yiting-portfolio/',
  plugins: [
    react(),
    imagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 5,
      },
      mozjpeg: {
        quality: 75,
        progressive: true
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4
      }
    })
  ],
});
