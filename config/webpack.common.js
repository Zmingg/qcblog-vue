const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const root = path.resolve(__dirname, '../');
module.exports = {
    entry: {
        app: './src/main.js',
        // vendor: ['vue','vuex','vue-router']
    },
    output: {
        path: path.resolve(root, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
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
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         }, {
            //             loader: "css-loader",
            //             options: {
            //                 modules: true,
            //                 localIdentName: "[name]_[local]_[hash:base64:5]"
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({
            //         use: [{
            //             loader: "css-loader",
            //             options: {
            //                 modules: true,
            //                 localIdentName: '[name]-[local]-[hash:base64:5]'
            //             }
            //         }, {
            //             loader: "sass-loader"
            //         }],
            //         fallback: "style-loader"
            //     })
            // },
            // {
            //     test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf|otf)$/,
            //     loader: "url-loader",
            //     options: {
            //         limit: 50000,
            //         name: '/assets/[name].[ext]',
            //     }
            // },
]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new ExtractTextPlugin("assets/css/styles.css"),
    ]


};