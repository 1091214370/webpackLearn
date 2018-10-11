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
    }
};