const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'deploy')
  },

  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8081,
  },

  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ]
  },
  
};