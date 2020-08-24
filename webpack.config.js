const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config = {
  mode: "production",
  entry: {
    site: ["./source/javascripts/site.js"],
  },
  output: {
    path: path.resolve(__dirname, ".tmp/dist"),
    filename: "./javascripts/[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = config;
