var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
      app: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./src/app.js"
      ]
    },
    output: {
      path: __dirname + '/build/',
      filename: '[name].js',
      publicPath: './build/'
    },
    module: {
      loaders: [
        {
          test: /\.less$/,
          loader: "style!css!less"
        },
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel'],
          include: path.join(__dirname, 'src')
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
}
