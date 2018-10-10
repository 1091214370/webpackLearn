const PATH = require('path');

module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    filename: '[name].js',
    path: PATH.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  }
};