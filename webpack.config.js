const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry:  {
        index: __dirname + "/src/main.js",
        // vendor: ['vue/dist/vue.js','vue-router','vuex','vue-resource'],
    },

    output: {
        path: __dirname + "/app",
        filename: "[name].js",
        publicPath: "/app/"
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


    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
             }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("assets/css/styles.css"),
    ],

    devServer: {
        port:8725,
        contentBase: "./app",
        compress: true,
        inline: true,
        hot:true,
        historyApiFallback: true,
        disableHostCheck: true
    }
}