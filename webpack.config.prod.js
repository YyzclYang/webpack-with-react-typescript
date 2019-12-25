const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config");
const utils = require("./utils");
const pageDirNames = utils.getPageDirNames();

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [...getHtmlConfig()]
});

function getHtmlConfig() {
  return pageDirNames.map((pageDirName) => {
    return new HtmlWebpackPlugin({
      filename: `${pageDirName}/index.html`,
      template: `./src/pages/${pageDirName}/index.html`,
      favicon: "./src/assets/images/react.ico",
      chunks: [pageDirName],
      hash: true, //防止缓存
      minify: {
        removeComments: true, //删除Html注释
        collapseWhitespace: true, //去除空格
        removeAttributeQuotes: true //去除属性引号
      }
    });
  });
}
