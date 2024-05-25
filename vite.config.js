// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: '*',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};

