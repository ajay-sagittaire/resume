const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    REACT_APP_GO_SERVER: JSON.stringify(process.env.REACT_APP_GO_SERVER)
  },
});
module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(pdf|png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlWebpackPlugin, definePlugin]
};
