const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.jsx"),
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    stats: { chunks: false, modules: false, colors: true },
  },
};
