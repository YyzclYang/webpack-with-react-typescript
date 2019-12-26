const glob = require("glob");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDev = () => process.env.NODE_ENV !== "production";

const getPageDirNames = () => {
  const pageDirPaths = glob.sync("./src/pages/*/index.html") || []; // 只搜索 src/pages 下一级文件夹中的 index.html
  return pageDirPaths.map(
    (pageDirPath) => pageDirPath.match(/^.\/src\/pages\/(\S+)\/index.html$/)[1]
  );
};

const pageDirNames = getPageDirNames();

/**
 * 批量获取 entry 值
 */
const getEntry = () => {
  const entries = {};
  pageDirNames.map((dirName) => {
    entries[dirName] = `./src/pages/${dirName}/index.tsx`;
  });
  return entries;
};

/**
 * 批量获取 new HtmlWebpackPlugin()
 */
function getHtmlConfig() {
  return pageDirNames.map((pageDirName) => {
    return new HtmlWebpackPlugin(
      merge(
        {
          filename: `${pageDirName}/index.html`,
          template: `./src/pages/${pageDirName}/index.html`,
          favicon: "./src/assets/images/favicon.ico",
          chunks: [pageDirName, "chunk-vendors", "chunk-common"]
        },
        isDev()
          ? {}
          : {
              hash: true, //防止缓存
              minify: {
                removeComments: true, //删除Html注释
                collapseWhitespace: true, //去除空格
                removeAttributeQuotes: true //去除属性引号
              }
            }
      )
    );
  });
}

module.exports = {
  isDev,
  getPageDirNames,
  getEntry,
  getHtmlConfig
};
