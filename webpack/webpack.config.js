const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index/index.tsx",
    about: "./src/about/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]/index.bundle.[hash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "../src")
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
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
        include: path.join(__dirname, "../src"), //限制范围，提高打包速度
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
          outputPath: "./asset/images",
          name: "[name].[hash].[ext]",
          publicPath: "/asset/images"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          outputPath: "./asset/video",
          name: "[name].[hash].[ext]",
          publicPath: "/asset/media"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          outputPath: "./asset/fonts",
          name: "[name].[hash].[ext]",
          publicPath: "/asset/fonts"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index/index.html",
      template: "./src/index/index.html",
      favicon: "./src/assets/images/react.ico",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      filename: "about/index.html",
      template: "./src/about/index.html",
      favicon: "./src/assets/images/react.ico",
      chunks: ["about"]
    }),
    new MiniCssExtractPlugin({
      filename: "[name]/index.bundle.[hash].css",
      chunkFilename: "[id].css"
    })
  ]
};
