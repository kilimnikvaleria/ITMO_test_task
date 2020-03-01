const webpack =  require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    host: '0.0.0.0',
    public: 'localhost:8081',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
});
