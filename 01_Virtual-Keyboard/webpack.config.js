const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // 자바스크립트의 진입점

  // 빌드를 했을 때 번들 파일 속성을 관리
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"), // 웹팩은 절대경로만 찾을 수 있음
    clean: true,
  },

  devtool: "source-map", // 빌드한 파일과 원본 파일을 연결
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "keyboard",
      template: "./index.html",
      inject: "body",
      favicon: "./favicon.ico"
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
