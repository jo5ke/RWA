// const path = require('path');

// module.export = {
//     entry: "src/prva.js",
//     output: {
//         path: "./dist",
//         filename: "bundle.js",
//         path: path.resolve(__dirname,'dist')
//     }

// }

var path = require("path");
module.exports = {
  entry: {
    app: ["./src/index2.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    //publicPath: "/assets/",
    filename: "bundle.js"
  },
  devtool : "sourcemap",
  //devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
           // presets: ['@babel/preset-env']
           presets: ['es2016']
          }
        }
      }
    ]
  }
};