const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          'style-loader', 
          {
            loader: 'css-loader', 
            options: {
              sourceMap: true, 
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true, 
            },
          },
        ],
      },
    ],
  },

  devServer: 
  {
    static: { 
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
  
  stats: 'errors-warnings',
});
