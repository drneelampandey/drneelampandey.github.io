import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo under aryan1113 → project Pages at /drneelampandey.github.io/
  // After transfer back to drneelampandey → user Pages at root → change to base: '/'
  base: '/drneelampandey.github.io/',
  build: {
    outDir: 'dist',
  },
})
