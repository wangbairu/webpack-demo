# webpack-demo

webpack 详解

## 初始化项目

npm init -y

## 安装 webpack 和 webpack-cli

npm install webpack webpack-cli -D

## 安装 style-loader 和 css-loader

npm install style-loader css-loader -D

## 自动生成 html, 安装 html-webpack-plugin

npm install html-webpack-plugin -D

## 开发工具,实时监控页面改动,需要下载 webpack-dev-server

npm install webpack-dev-server -D

## 下载 less 工具

npm install less -D

## 下载 less-loader 处理 less 文件

npm install less-loader -D

## postcss

1. PostCSS 是一个通过 JavaScript 来转换样式的工具
2. 这个工具可以帮助我们进行一些 CSS 的转换和适配，比如自动添加浏览器前缀、css 样式的重置
3. 但是实现这些工具，我们需要借助于 PostCSS 对应的插件
   步骤:
4. 查找 PostCSS 在构建工具中的扩展，比如 webpack 中的 postcss-loader
5. 选择可以添加你需要的 PostCSS 相关的插件;
   安装:
   npm install postcss postcss-preset-env -D

## 将一些放在 public 目录中的文件,复制到 dist 文件夹中

npm install copy-webpack-plugin -D

## 安装 babel,做代码的转换(为了兼容老版本浏览器)

1. npm install @babel/core
2. npm install @babel/preset-env -D

## 要打的补丁中的核心代码

npm install core-js

## 生成器, await 和 async 都是包含在这个里面的

npm install regenerator-runtime

## useBuiltIns 和 @babel/plugin-transform-runtime 的区别

1. useBuiltIns 将 polyfill 产生的代码添加到全局中的
2. @babel/plugin-transform-runtime 不会将他们添加到全局里面
3. 编写三方库的时候不希望污染别人的代码,这个时候就要使用 @babel/plugin-transform-runtime
4. 二者不能同时使用
5. 使用@babel/plugin-transform-runtime 需要安装 npm install @babel/runtime-corejs3

## 支持 ts

npm install ts-loader -D

## 下载 typescript 编译器

sudo npm install typescript -g

## 生成 tsconfig.json 文件

tsc --init

## 安装 typescript 的预设

npm install @babel/preset-typescript -D

## 安装 ESlint

npm install eslint -D

## 安装 eslint-loader(在加载 js 文件的时候就使用这个 loader 对文件进行格式校验)

npm install eslint-loader -D

## 安装webpack合并库
npm install webpack-merge -D
