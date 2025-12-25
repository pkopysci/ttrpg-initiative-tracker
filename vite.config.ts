import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  // Serve files from the "src" directory during development
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/index.html'
    }
  }
});