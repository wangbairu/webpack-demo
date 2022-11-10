module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-essential", "airbnb-base"],
  overrides: [],
  parserOptions: {
    // ecmaVersion: "latest",
    ecmaVersion: 12,
  },
  plugins: ["vue"],
  rules: {
    // 0 => off
    // 1 => warn
    // 2 => error
    // 允许有console.log
    "no-console": "off",
    quotes: ["error", "double"],
    // 允许使用箭头函数
    "arrow-body-style": "off",
  },
};
