import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: "",
  plugins: [react()], // Use 'react' here
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "node_modules"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
