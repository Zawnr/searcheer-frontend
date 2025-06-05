const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
<<<<<<< HEAD
  devtool: 'inline-source-map',
=======
  devtool: 'eval-cheap-module-source-map',
>>>>>>> 3c70df8
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
<<<<<<< HEAD
          'css-loader',
          'postcss-loader'
=======
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
>>>>>>> 3c70df8
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    historyApiFallback: true,
    hot: true,
<<<<<<< HEAD
    open: true, 
=======
>>>>>>> 3c70df8
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  stats: 'errors-warnings',
});
