const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const root = path.resolve(__dirname, '../');

module.exports = merge(common, {
    entry: {
        app: './src/entry-prod.js',
    },
    output: {
        path: path.resolve(root, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]_[local]_[hash:base64:5]"
                        }
                    }
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf|otf)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: '/assets/[name].[ext]',
                }
            },

        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
        new HtmlWebpackPlugin({
            title: 'QcBlog',
            filename: 'index.html',
            template: 'src/index-prod.html'
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],



});