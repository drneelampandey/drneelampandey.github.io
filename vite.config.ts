import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // User/org Pages (username.github.io) are served at root
  build: {
    outDir: 'dist',
  },
})
