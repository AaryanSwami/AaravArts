import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

// Custom plugin to copy _redirects file
const copyRedirects = () => {
  return {
    name: 'copy-redirects',
    buildEnd() {
      copyFileSync(resolve(__dirname, 'public/_redirects'), resolve(__dirname, 'dist/_redirects'));
    },
  };
};

export default defineConfig({
  plugins: [react(), copyRedirects()],
  base: '/AaravArts/', // Ensure this is set correctly
});
