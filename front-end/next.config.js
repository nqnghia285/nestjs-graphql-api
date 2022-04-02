const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
   reactStrictMode: true,
   eslint: {
      dirs: ['pages', 'components'],
   },
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   env: {
      // Environment variables
      urlApi: process.env.NEXT_PUBLIC_URL_API,
   },
}
