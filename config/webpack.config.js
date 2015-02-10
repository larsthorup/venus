var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
  entry: './src/client/app.js',
  output: {
    path: './output/static',
    filename: 'main.js'
  },
  module: {
    loaders: []
  },
  plugins: []
};

// Generate index.html to load the generated bundles
webpackConfig.plugins.push(new HtmlWebpackPlugin({
  template: './src/client/index.template.html'
}));

// Extract CSS files instead of embedding them in the JS bundle
webpackConfig.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract("style-loader", "css-loader")
});
webpackConfig.plugins.push(new ExtractTextPlugin("[name].css"));

module.exports = webpackConfig;