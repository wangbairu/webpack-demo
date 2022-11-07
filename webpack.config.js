// 引入nodejs的路径模块
const path = require("path");

/**
 * 1. 比起CLI这种简单直接的方式,配置文件具有更多的灵活性. 我们可以通过配置方式指定loader规则、plugin、resolve选项,以及许多其他增强功能.
 * 2. 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它
 * 3. npx webpack --config webpack.config.js
 * 4. --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用的。
 */
module.exports = {
  // 配置入口文件
  entry: "./src/index.js",
  // 配置出口
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        /**
         * 1. webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
         * 2. 所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loader。
         */
        test: /\.css$/i,
        /**
         * 1. 模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。
         * 2. 链会逆序执行。
         * 3. 第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推。
         * 4. 最后，webpack 期望链中的最后的 loader 返回 JavaScript。
         */
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
