const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config");

module.exports = Object.assign({}, baseConfig, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack-with-react-typescript",
      template: "./src/index.html",
      favicon: "./src/react.ico",
      minify: {
        removeComments: true, //删除Html注释
        collapseWhitespace: true, //去除空格
        removeAttributeQuotes: true //去除属性引号
      }
    })
  ]
});
