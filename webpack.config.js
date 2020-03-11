/* eslint-env node */
const HtmlPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new HtmlPlugin({ favicon: "favicon.ico" })]
}
