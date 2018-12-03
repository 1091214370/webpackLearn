const PATH = require('path');
const HtmlWenpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index',
    },
    output: {
        filename: '[name].js',
        path: PATH.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: './dist',
      hot: true
    },
    module: {
        rules: [
          {
            test: /\.(css|less|scss)$/,
            use: ['style-loader', 'css-loader', 'less-loader', 'sass-loader'],
          },
          {
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader'],
          },
          {
            test: /\.(csv|tsv)$/,
            use: ['csv-loader'],
          },
          {
            test: /\.xml$/,
            use: ['xml-loader'],
          }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']), // 清理/dist文件夹
      new HtmlWenpackPlugin({
        title: 'demo webpack plugin'
      }),
      new webpack.DefinePlugin({ // 定义全局变量

      }),
    ],
};