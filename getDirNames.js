const glob = require("glob");

module.exports = function getDirNames() {
  const dirPaths = glob.sync("./src/*/index.html"); // 只搜索 src 下一级文件夹中的 index.html

  return dirPaths.map(
    (dirPath) => dirPath.match(/^.\/src\/(\S+)\/index.html$/)[1]
  );
};
