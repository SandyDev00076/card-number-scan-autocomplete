const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const fs = require('fs');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.bundle.js",
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'public/'),
        publicPath: '/'
    },
    port: 3000,
    hot: "only"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: resolveAppPath("public/index.html"),
    }),
  ],
};
