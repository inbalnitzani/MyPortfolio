import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
// Production: relative base so JS/CSS work at https://<user>.github.io/<any-repo>/
// without hard-coding the repo name. The router basename is set at runtime in App.jsx.
// export default defineConfig(({ command }) => ({
//   base: command === 'build' ? './' : '/',
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// }))

export default defineConfig({
  base: '/MyPortfolio/', 
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
