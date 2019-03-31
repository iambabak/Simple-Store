const withCSS = require('@zeit/next-css')
// const withSass = require('@zeit/next-sass')

// /* Without CSS Modules, with PostCSS */
// module.exports = withCSS()
module.exports = withCSS({
    webpack: function (config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      })
      return config
    }
})
/* With CSS Modules */
// module.exports = withCSS({ cssModules: true })

/* With additional configuration on top of CSS Modules */

// module.exports = withCSS({
//     cssModules: true,
//     cssLoaderOptions: {
//       importLoaders: 1,
//       localIdentName: "[local]___[hash:base64:5]",
//     }
// });
