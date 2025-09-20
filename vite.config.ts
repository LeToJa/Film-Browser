import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/frontend/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/frontend/**/*.{ts,tsx}', 'src/server/**/*.{ts,tsx}'],
      exclude: [
        '**/src/**/*types.ts',
        '**/src/frontend/entry-server.tsx',
        '**/src/frontend/entry-client.tsx',
        '**/src/frontend/App.tsx',
        '**/src/frontend/vite-env.d.ts',
        '**/src/frontend/pages/',
        '**/src/server/index.ts',
        '**/src/server/data/**',
      ],
    },
  },
})
