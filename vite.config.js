
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules\/(react|react-dom|react-router-dom)\//,
            },
            {
              name: 'animation-vendor',
              test: /node_modules\/(framer-motion|gsap|@gsap\/react|lenis)\//,
            },
            {
              name: 'icons-vendor',
              test: /node_modules\/lucide-react\//,
            },
          ],
        },
      },
    },
  },
})
