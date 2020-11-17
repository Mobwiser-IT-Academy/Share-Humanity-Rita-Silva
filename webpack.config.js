const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        mainPage: "./src/index.js",
        corona: "./src/corona.js",
        issues: "./src/issues.js"


    },
    output: {
        filename: "[name].main.js",
        path: path.resolve(__dirname, "dist")

    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]

    },

};