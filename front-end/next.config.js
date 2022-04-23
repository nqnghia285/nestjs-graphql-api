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
      author: process.env.NEXT_PUBLIC_AUTHOR,
      authorEmail: process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
      authorPhone: process.env.NEXT_PUBLIC_AUTHOR_PHONE,
      authorGithub: process.env.NEXT_PUBLIC_AUTHOR_GITHUB,
   },
   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      // const { module } = config
      // const { rules } = module
      // rules?.push({
      //    test: /\.(png|jpe?g|gif)$/i,
      //    use: [
      //       {
      //          loader: 'file-loader',
      //       },
      //    ],
      // })
      return config
   },
}
