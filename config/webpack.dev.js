module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    // 用代理解决跨域问题
    proxy: {
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
};
