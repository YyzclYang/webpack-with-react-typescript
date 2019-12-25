const glob = require("glob");

const getPageDirNames = () => {
  const pageDirPaths = glob.sync("./src/pages/*/index.html") || []; // 只搜索 src/pages 下一级文件夹中的 index.html

  return pageDirPaths.map(
    (pageDirPath) => pageDirPath.match(/^.\/src\/pages\/(\S+)\/index.html$/)[1]
  );
};

module.exports = {
  getPageDirNames
};
