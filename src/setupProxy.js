const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api/tmdb',
    createProxyMiddleware({
      target: 'http://tmdb.sandbox.zoosh.ie',
      changeOrigin: true,
      pathRewrite: {
        '^/api/tmdb': '/',
      },
    }),
  );
};
