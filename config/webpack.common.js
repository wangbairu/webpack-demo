const resolveApp = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// DefinePlugin允许在编译时创建配置的全局常量
const { DefinePlugin } = require("webpack");
// 将一些放在public目录中的文件,复制到dist文件夹中
const CopyWebpackPlugin = require("copy-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");

const { merge } = require("webpack-merge");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const commonConfig = {
  // 绝对路径
  // context: resolveApp("./"),
  // entry写上相对路径时,并不是相对于文件所在的路径, 而是相对于context配置的路径
  entry: "./src/main.js",
  // 配置出口
  output: {
    filename: "[name].bundle.js",
    path: resolveApp("./build"),
    clean: true,
  },
  resolve: {
    // 配置默认文件扩展名
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".vue"],
    // 配置文件别名
    alias: {
      "@": resolveApp("./src"),
    },
  },
  optimization: {
    // 对代码进行压缩的相关的操作
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
          filename: "img/[name].[hash:6][ext]",
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
          filename: "font/[name].[hash:6][ext]",
        },
      },
      // babel
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
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
      template: resolveApp("./public/index.html"),
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
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
module.exports = function (env) {
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production" : "development";

  const config = isProduction ? prodConfig : devConfig;

  return merge(commonConfig, config);
};
