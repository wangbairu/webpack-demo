const path = require("path");

const appDir = process.cwd();
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

console.log("-------------", appDir);
module.exports = resolveApp;
