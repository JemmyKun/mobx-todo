const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "build")
    },
    devtool: "source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial"
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /node_modules/,
                loader: ["babel-loader"]
            },
            {
                test: /\.(css|scss|sass)$/,
                exclude: /node_modules/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "./public/index.html")
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: "8090",
        host: "localhost",
        hot: false,
        inline: true,
        compress: true,
        quiet: false,
        open: true,
        progress: false,
    }
}