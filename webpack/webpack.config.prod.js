const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index/index.html",
      template: "./src/index/index.html",
      favicon: "./src/assets/images/react.ico",
      chunks: ["index"],
      minify: {
        removeComments: true, //删除Html注释
        collapseWhitespace: true, //去除空格
        removeAttributeQuotes: true //去除属性引号
      }
    }),
    new HtmlWebpackPlugin({
      filename: "about/index.html",
      template: "./src/about/index.html",
      favicon: "./src/assets/images/react.ico",
      chunks: ["about"],
      minify: {
        removeComments: true, //删除Html注释
        collapseWhitespace: true, //去除空格
        removeAttributeQuotes: true //去除属性引号
      }
    })
  ]
});
