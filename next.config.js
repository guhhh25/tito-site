// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://tito.com.br/sys/msg/api-email.php',
      },
    ]
  },
}
