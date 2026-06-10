import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// SPA with client-side routing (react-router). appType 'spa' is the default,
// so deep links like /site/filipitsch/servicos fall back to index.html in dev & preview.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
