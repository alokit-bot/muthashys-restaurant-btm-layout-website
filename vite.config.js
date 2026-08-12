import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves this app from a repository subpath.
  // Relative asset URLs prevent the deployed page from requesting /assets at the domain root.
  base: './',
  plugins: [react()],
});
