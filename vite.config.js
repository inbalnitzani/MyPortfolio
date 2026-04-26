import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// GitHub *Project* Pages: site is https://<user>.github.io/<repo>/
// Must match the repo name in the URL (update if yours differs, e.g. "Portfolio" vs "portfolio")
const GITHUB_PAGES_REPO = 'MyPortfolio'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Production builds: assets under /<repo>/ so they load on GitHub Pages. Dev stays on /
  base: command === 'build' ? `/${GITHUB_PAGES_REPO}/` : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
