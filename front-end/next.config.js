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
   },
}
