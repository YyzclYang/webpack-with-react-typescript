const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CompressionWebpackPlugin({
      algorithm: "brotliCompress", // 压缩算法，Node 11.7.0 对 Brotli 有内置支持
      test: /\.js(\?.*)?$/i,
      threshold: 10240, // 大于 10kb 的资源才会压缩
      minRatio: 0.8 // 压缩比大于 0.8 的资源才会压缩
    }),
    new HtmlWebpackPlugin({
      title: "webpack-with-react-typescript",
      template: "./src/index.html",
      favicon: "./src/react.ico",
      hash: true, //防止缓存
      minify: {
        removeComments: true, //删除Html注释
        collapseWhitespace: true, //去除空格
        removeAttributeQuotes: true //去除属性引号
      }
    })
  ]
});
