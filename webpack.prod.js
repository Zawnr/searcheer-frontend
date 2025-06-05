const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',     
            options: {
              importLoaders: 1, 
            }
          },
          'postcss-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: 'styles/[id].[contenthash].css',
    }),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // Pengaturan Terser bisa lebih detail
        terserOptions: {
          compress: {
            drop_console: true, // Hapus console.log di produksi
          },
        },
      }),
      new CssMinimizerPlugin(), 
    ],
    splitChunks: { 
      chunks: 'all',
      minSize: 20000, 
      minRemainingSize: 0,
      minChunks: 1, 
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
    },
    runtimeChunk: 'single',
  },
  performance: { 
    hints: 'warning', 
    maxAssetSize: 250000, 
    maxEntrypointSize: 250000, 
  },
});
