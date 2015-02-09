var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/app.js',
  output: {
    path: './output/static',
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.template.html'
    })
  ]
};