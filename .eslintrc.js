module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": 0, //禁止使用console
    eqeqeq: 0, //必须使用全等
    "no-debugger": 1, //禁止使用debugger
    "no-unused-vars": [1, { vars: "all", args: "after-used" }] //不能有声明后未被使用的变量或参数
  }
};
