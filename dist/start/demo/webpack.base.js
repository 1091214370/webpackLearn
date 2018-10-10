/**
 * 目前这里的配置并不是必须的，webpack4可以不依赖配置文件，就可以对js文件进行打包。
 */
const PATH = require('path');

module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    filename: '[name].js',
    path: PATH.resolve(__dirname, 'dist'),
  }
};