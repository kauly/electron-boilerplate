const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  target: "electron-renderer",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist/renderer"),
    filename: "js/[name].js",
    publicPath: "./",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
              [
                "@emotion/babel-preset-css-prop",
                { autoLabel: true, labelFormat: "[local]" },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist/renderer"),
    compress: true,
    port: 4000,
    historyApiFallback: true,
    publicPath: "/",
  },
};
