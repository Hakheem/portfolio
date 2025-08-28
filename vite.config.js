import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
          'animation-vendor': ['framer-motion', 'aos'],
          'icon-vendor': ['@heroicons/react', 'lucide-react', 'react-icons'],
          'form-vendor': ['react-hook-form'],
          'scroll-vendor': ['react-scroll', 'react-anchor-link-smooth-scroll'],
          'swiper-vendor': ['swiper'],
          'utils-vendor': ['react-countup', 'react-simple-typewriter', 'tailwind-merge', 'tailwindcss-animate']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2015'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@chakra-ui/react', 'framer-motion', 'swiper']
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
})
