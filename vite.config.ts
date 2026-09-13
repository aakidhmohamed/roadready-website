import tailwindcss from '@tailwindcss/vite';
import { nitro } from 'nitro/vite';
import vinext from 'vinext';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  plugins: [tailwindcss(), vinext(), ...(command === 'build' ? [nitro()] : [])],
}));
