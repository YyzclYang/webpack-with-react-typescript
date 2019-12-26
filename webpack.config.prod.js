const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: false,
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "initial"
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: "initial",
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CompressionWebpackPlugin({
      algorithm: "brotliCompress", // 压缩算法，Node 11.7.0 对 Brotli 有内置支持
      test: /\.js(\?.*)?$/i,
      threshold: 10240, // 大于 10kb 的资源才会压缩
      minRatio: 0.8 // 压缩比大于 0.8 的资源才会压缩
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[hash].css",
      chunkFilename: "[id].css"
    })
  ]
});
