
// 引入nodejs的路径模块
const path = require('path')

/**
 * 1. 比起CLI这种简单直接的方式,配置文件具有更多的灵活性. 我们可以通过配置方式指定loader规则、plugin、resolve选项,以及许多其他增强功能.
 * 2. 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它
 * 3. npx webpack --config webpack.config.js
 * 4. --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用的。
 */
module.exports = {
  // 配置入口文件
  entry: './src/index.js',
  // 配置出口
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}