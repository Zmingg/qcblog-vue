const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin({}),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8725,
        host:  '0.0.0.0',
        compress: true,
        hot: true,
        hotOnly: true,
    }



});