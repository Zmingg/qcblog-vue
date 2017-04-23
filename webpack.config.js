var webpack = require("webpack");
module.exports = {
	devtool: false,
	entry:  __dirname + "/src/main.js",
	output: {
		path: __dirname + "/public",
		filename: "index.js"
	},

	module: {

		loaders: [
			{test: /\.json$/,loader: "json-loader"},
			{test: /\.css$/,loader: 'style-loader!css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]'},
			{test: /\.vue$/,loader: "vue-loader"},
		]
	},

	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': __dirname + "/public"
		}
	},


	devServer: {
		port:8725,
		contentBase: "./public",//本地服务器所加载的页面所在的目录
		historyApiFallback: true,//不跳转
		hot:true,
		inline: true//实时刷新
	} 
}