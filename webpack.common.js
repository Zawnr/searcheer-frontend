const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.jsx'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
        rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, 
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',

      },

      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset/resource',          
        generator: { 
          filename: 'assets/images/[name].[hash][ext][query]',
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { 
          filename: 'assets/fonts/[name].[hash][ext][query]',
        },
      },
  ],
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({ 
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/static-assets'),
          globOptions: {
            ignore: ['**/index.html'],
          },
          
        },
      ],
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: { 
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),

    }
  }
};
