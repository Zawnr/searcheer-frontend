const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/manifest.json', to: 'manifest.json' },
        { from: 'public/service-worker.js', to: 'service-worker.js' },
        { from: 'public/logo2_192x192.png', to: 'logo2_192x192.png' },
        { from: 'public/logo2_512x512.png', to: 'logo2_512x512.png' },
        {
          from: 'public/screenshot-desktop-1200x700.png',
          to: 'screenshot-desktop-1200x700.png',
        },
        {
          from: 'public/screenshot-mobile-473x833.png',
          to: 'screenshot-mobile-473x833.png',
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: { chunks: 'all' },
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true }), new CssMinimizerPlugin()],
  },
});
