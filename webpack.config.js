const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// https://webondev.github.io/
module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: 'development',
    entry: './index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename:'[name].[hash].js'
    },
    devServer: {
        port: 3010,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html',
            minify:{
                collapseWhitespace: true 
            }
        }), 
        new CleanWebpackPlugin(),
       
        new CopyWebpackPlugin({
            patterns: [
            {
                from: path.resolve(__dirname, 'src/make_request.json'),
                to: path.resolve(__dirname, 'dist')
            },
            {
                from: path.resolve(__dirname, 'src/assets/images/lotos.png'),
                to: path.resolve(__dirname, 'dist')
            }
        ]}),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};