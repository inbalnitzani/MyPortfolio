import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
// Dev: base "/" so http://localhost:5173/ works. Build: match GitHub Project Pages path.
const GITHUB_PAGES_REPO = 'MyPortfolio'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${GITHUB_PAGES_REPO}/` : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
