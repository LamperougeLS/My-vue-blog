export const proxyList = {
  '/api': {
    target: '127.0.0.1:3000',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
}
