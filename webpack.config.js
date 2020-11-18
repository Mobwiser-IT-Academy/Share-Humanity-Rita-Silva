const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index/index.js",
        coronavirus: "./src/coronavirus/coronavirus.js",
        detail: "./src/detail/detail.js"


    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")

    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]

    },

};