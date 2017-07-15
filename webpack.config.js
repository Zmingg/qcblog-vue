const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: false,

    entry:  {
        index: __dirname + "/src/main.js",
    },

    output: {
        path: __dirname + "/public",
        filename: "[name].js",
    },

    resolve: {
        alias: {
            Lib: path.resolve(__dirname, 'src/lib/'),
        },

    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: "babel-loader",
            },
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
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]'
                        }
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf|otf)$/, 
                loader: "url-loader",
                options: {
                    limit: 50000,
                    name: '/assets/[name].[ext]',
                }
            },
        ]
    },

    externals: {
        Vue: "Vue",
        Vuex: "Vuex",
    },

    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
             }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ExtractTextPlugin("assets/css/styles.css"),
    ],

    devServer: {
        port:8725,
        contentBase: "./public",
        disableHostCheck: true,
        historyApiFallback: true,
        inline: true
    }
}