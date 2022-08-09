import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    {
      babel: {
        plugins: [
          ['macros'],
          ['babel-plugin-styled-components', {
            ssr: true,
            displayName: true,
          }],
        ],
      },
    },
  )],
});
