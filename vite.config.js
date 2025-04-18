import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/reports': 'http://localhost:5000',
    },
    middlewareMode: false, // just in case
    configureServer: (server) => {
      // 👇 This tells Vite to always return index.html for unrecognized routes
      server.middlewares.use(
        history({
          verbose: true,
          disableDotRule: true,
        })
      );
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.(js|jsx)$/,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
