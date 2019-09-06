const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config");

module.exports = Object.assign({}, baseConfig, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
      template: "./src/index.html"
    })
  ]
});
