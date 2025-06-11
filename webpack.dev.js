const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3001,
    historyApiFallback: true,
  },
  plugins: [
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
});
