/* eslint-env node */
const HtmlPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.tsx",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "linaria/loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV !== "production"
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production",
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ favicon: "favicon.ico" }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ]
}
