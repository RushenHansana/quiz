// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://backendgame.sytes.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};

