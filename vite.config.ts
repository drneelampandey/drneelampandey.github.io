import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base set by workflow (VITE_BASE_PATH) for CI; fallback for local dev
  // After transfer back to drneelampandey (user Pages at root), set workflow env to '/' or remove it
  base: process.env.VITE_BASE_PATH || '/drneelampandey.github.io/',
  build: {
    outDir: 'dist',
  },
})
