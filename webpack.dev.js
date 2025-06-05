const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
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
        ],
      },
    ],
  },
  devServer: {
    static: {
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
        warnings: false,
      },
    },
  },
  stats: 'errors-warnings',
});
