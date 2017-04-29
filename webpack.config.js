var webpack = require("webpack");
module.exports = {
	devtool: false,
	entry:  __dirname + "/src/main.js",
	output: {
		path: __dirname + "/public",
		filename: "index.js",
	},

	module: {

		loaders: [
			{test: /\.js$/,loader: 'babel-loader?presets=es2015&plugins=transform-runtime',exclude: /node_modules/},
			{test: /\.json$/,loader: "json-loader"},
			{test: /\.css$/,loader: 'style-loader!css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]'},
			{test: /\.vue$/,loader: "vue-loader"},
			{test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf|otf)$/, loader: 'url-loader?limit=50000&name=/assets/[name].[ext]'},
			{ test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader'},
		]
	},

	externals: {
		Vue: "Vue",
	},

	devServer: {
		port:8725,
		contentBase: "./public",
		historyApiFallback: true,
		inline: true
	}
}