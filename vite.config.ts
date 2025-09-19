import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/frontend/entry-server.tsx',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  resolve: {
    alias: {
      '@frontend': path.resolve(__dirname, 'src/frontend'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@frontend/general/variables.scss" as *;`,
      },
    },
  },
})
