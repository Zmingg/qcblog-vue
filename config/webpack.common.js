const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        // vendor: ['vue','vuex','vue-router']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
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
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf|otf)$/,
                loader: "url-loader",
                options: {
                    limit: 50000,
                    name: '/assets/[name].[ext]',
                }
            },
]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'QcManage - Blog',
            filename: 'index.html',
            template: 'src/index.html'
        }),
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
    ]


};