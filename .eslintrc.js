module.exports = {
  // 运行环境
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard-with-typescript', 'plugin:prettier/recommended'], // 规则继承
  overrides: [],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaVersion: 'latest',
    // ecmaFeatures: {
    //   jsx: false
    // },
    // sourceType: 'module'
    parser: '@typescript-eslint/parser'
    // parser: 'babel-eslint'
    // project: ['./tsconfig.json']
  },
  plugins: ['vue'], // 插件
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off'
  }
}
