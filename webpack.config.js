var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entry = {
	main: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	vendor: [
		'react', 
		'react-dom'
	]
};

module.exports = [{
	context: __dirname,
	entry: entry,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel-loader']
			},
			{
				test: /\.[s]?css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader!autoprefixer-loader')
			},
			{
				test: /\.woff[2]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&minetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		//new webpack.optimize.UglifyJsPlugin({
		//	output: {
		//		comments: false
		//	},
		//	sourceMap: true,
		//	mangle: false
		//}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
		new ExtractTextPlugin('[name].bundle.css')
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [__dirname],
		modulesDirectories: ['node_modules', './']
	}
}];
