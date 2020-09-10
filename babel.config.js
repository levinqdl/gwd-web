module.exports = {
  presets: [
    ["@babel/env", { useBuiltIns: "usage", corejs: 3 }],
    "@babel/typescript",
    "@babel/react"
  ],
  plugins: ["@babel/transform-runtime"]
}
