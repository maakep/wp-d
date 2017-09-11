module.exports = {
  entry: ["./app.js"],
  output: {
    filename: "./bundle/bundle.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".es6", ".js"]
  }
}