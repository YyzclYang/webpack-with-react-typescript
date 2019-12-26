const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const utils = require("./utils");

module.exports = {
  entry: utils.getEntry(),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].[hash].js",
    chunkFilename: "static/chunks/[name].[hash].js"
    // publicPath: ""
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.s?css$/,
        use: [
          utils.isDev() ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
        include: path.join(__dirname, "src"), //限制范围，提高打包速度
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
      },
      {
        test: /\.(jpg|png|bmp|jpe?g|gif|ico)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          outputPath: "./static/assets/images",
          name: "[name].[hash].[ext]"
          // publicPath: "static/assets/images"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          outputPath: "./static/assets/media",
          name: "[name].[hash].[ext]"
          // publicPath: "static/assets/media"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          outputPath: "./static/assets/fonts",
          name: "[name].[hash].[ext]"
          // publicPath: "static/assets/fonts"
        }
      }
    ]
  },
  plugins: [...utils.getHtmlConfig()]
};
