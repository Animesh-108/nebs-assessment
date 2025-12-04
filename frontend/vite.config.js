import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for Docker mapping
    strictPort: true,
    port: 5173, 
    proxy: {
      // This forwards any request starting with /api to the backend container
      '/api': {
        target: 'http://server:5000', // 'server' matches the service name in docker-compose.yml
        changeOrigin: true,
        secure: false,
      }
    }
  }
})