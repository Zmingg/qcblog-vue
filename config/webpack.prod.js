const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    plugins:[
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
        }),
        new HtmlWebpackPlugin({
            title: 'QcManage - Blog',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],



});