import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// import daisyui from 'daisyui';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    proxy: {
        '/kuwo': {
            target: 'https://www.kuwo.cn',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/kuwo/, '')
        },
        '/a': {
            target: 'https://jkyapi.top/API/hqyyid',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/a/, '')
        },
    }
},
},
)
