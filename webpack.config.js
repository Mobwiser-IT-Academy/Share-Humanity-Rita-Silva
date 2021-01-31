const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index/index.ts",
        coronavirus: "./src/coronavirus/coronavirus.ts",
        detail: "./src/detail/detail.ts",
    },
    output: {
        filename: "[name].bundle.js",
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, "dist"),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index/index.html",
        }),
        new HtmlWebpackPlugin({
            // Also generate a test.html
            filename: "coronavirus.html",
            template: "./src/coronavirus/coronavirus.html",
        }),

        new HtmlWebpackPlugin({
            // Also generate a test.html
            filename: "detail.html",
            template: "./src/detail/detail.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [ ".tsx", ".ts", ".js"],
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        open: true,
    },
};
