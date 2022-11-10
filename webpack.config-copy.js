const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
// DefinePlugin允许在编译时创建配置的全局常量
const {
  DefinePlugin,
} = require("webpack");
// 将一些放在public目录中的文件,复制到dist文件夹中
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  // 配置入口文件
  entry: {
    main: "./src/main.js",
  },
  // 配置出口
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(
      __dirname,
      "./dist"
    ),
    // 在打包之后的静态资源前面进行一个路径的拼接
    // publicPath: "./",
    // publicPath: "/abc",
    clean: true,
  },
  devtool: "cheap-module-source-map",
  // devtool: "source-map",
  // 专门为 webpack-dev-server 书写配置选项的
  devServer: {
    static: "./dist",
    // 开启HMR (Hot Module Replacement)
    hot: true,
    // 服务文件夹, 一般这个和output中的 publicPath设置一样的
    // publicPath: "/abc"
    // host: '0.0.0.0',
    // port: 7777,
    // open: true,
    // 开启gzip
    // compress: true,
    // 用代理解决跨域问题
    proxy: {
      // "/api": "http://localhost:8888"
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": "",
        },
        source: false,
        changeOrigin: true,
      },
    },
    historyApiFallback: true,
  },
  resolve: {
    // 配置默认文件扩展名
    extensions: [
      ".wasm",
      ".mjs",
      ".js",
      ".json",
      ".jsx",
      ".ts",
      ".vue",
    ],
    // 配置文件别名
    alias: {
      "@": path.resolve(
        __dirname,
        "./src"
      ),
      // "page": path.resolve(__dirname, "./src/pages")
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          // "css-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      // 图片处理
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset",
        generator: {
          filename:
            "img/[name].[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      // 字体处理
      {
        test: /\.(woff2?|eot|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename:
            "font/[name].[hash:6][ext]",
        },
      },
      // babel
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader",
        ],
      },
      // 支持ts
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "项目名称",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      aa: 3333,
      // API: window.API,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
};
