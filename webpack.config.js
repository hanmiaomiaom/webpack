const path = require('path')

module.exports = {
  entry: './src/index.js', // 打包的入口
  output: {
    path: path.join(__dirname, './dist'),  // 将打包结果放到 dist 目录中
    filename: 'main.js' // 自定打包结果的文件名
  },
  mode: 'production', //打包模式
  /**
   * production 生成模式构建
    构建速度慢，有优化（压缩、优化了）
    development 开发模式构建
    构建速度快，没有优化（没有压缩等优化）
    如果没有指定，则默认是 production
   */
  module: {
         rules: [// 当 test 匹配到以 .css 结尾的文件资源的时候，use 使用 style-loader、css-loader 加载器进行解析处理
           {
             test: /\.css$/,
             use: [
               'style-loader',// 2. 使用 style-loader 生成 style 节点插入页面的 head 中
               'css-loader'// 1. 先使用 css-loader 将 css 转为 JavaScript 模块
             ]
           }
         ]
       }
}
