const glob = require("glob");

module.exports = function getDirNames() {
  const dirPaths = glob.sync("./src/pages/*/index.html"); // 只搜索 src/pages 下一级文件夹中的 index.html

  return dirPaths.map(
    (dirPath) => dirPath.match(/^.\/src\/pages\/(\S+)\/index.html$/)[1]
  );
};
