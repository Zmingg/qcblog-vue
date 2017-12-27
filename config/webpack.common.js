const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const root = path.resolve(__dirname, '../');
module.exports = {
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js',
            'Lib': path.resolve(root, 'src/lib/'),
        }
    },
    externals: {

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    }


};