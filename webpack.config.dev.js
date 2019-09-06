const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config");

module.exports = Object.assign({}, baseConfig, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack-with-react-typescript",
      template: "./src/index.html",
      favicon: "./src/react.ico"
    })
  ]
});
