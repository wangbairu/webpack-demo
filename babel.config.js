const presets = [
  [
    "@babel/preset-env",
    {
      // false: 不用任何的polyfill相关的代码
      // usage: 代码中需要哪些polyfill, 就引用相关的api
      // entry: 手动在入口文件中导入 core-js/regenerator-runtime, 根据目标浏览器引入对应的 polyfill
      useBuiltIns: "usage",
      corejs: 3,
    },
  ],
  ["@babel/preset-typescript"],
];
// const plugins = [];

// const isProduction = process.env.NODE_ENV === "production";


// if (condition) {
//   plugins.push()
// } else {
  
// }
module.exports = {
  presets,
  // plugins,
};

// plugins: [
//   [
//     "@babel/plugin-transform-runtime",
//     {
//       corejs: 3,
//     },
//   ],
// ],
