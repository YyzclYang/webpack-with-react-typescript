const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config");
const getDirNames = require("./getDirNames");
const dirNames = getDirNames();

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [...getHtmlConfig()]
});

function getHtmlConfig() {
  return dirNames.map((dirName) => {
    return new HtmlWebpackPlugin({
      filename: `${dirName}/index.html`,
      template: `./src/pages/${dirName}/index.html`,
      favicon: "./src/assets/images/react.ico",
      chunks: [dirName],
      hash: true, //防止缓存
      minify: {
        removeComments: true, //删除Html注释
        collapseWhitespace: true, //去除空格
        removeAttributeQuotes: true //去除属性引号
      }
    });
  });
}
