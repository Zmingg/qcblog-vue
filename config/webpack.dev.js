const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    entry: {
        app: './src/entry-dev.js',
        vendor: ['vue','vuex','vue-router','element-ui']
    },
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                }
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin({}),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
        new HtmlWebpackPlugin({
            title: 'QcBlog - Dev',
            filename: 'index.html',
            template: 'src/index.html'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "../src"),
        port: 8725,
        host:  '0.0.0.0',
        compress: true,
        hot: true,
        hotOnly: true,
        disableHostCheck: true
    }



});