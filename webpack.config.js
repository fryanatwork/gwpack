/*
  webpack configuration
  - Version: 1.0.1-alpha.1
  - Author: Fryan
  - Modified: 2018-05-07
*/

const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	// mode: 'production',
	entry: './plugins/main.js',
	output: {
		path: path.resolve(__dirname, 'plugins/bundle'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(css|scss)$/,
				use: ExtractTextPlugin.extract({
					use: [
						'css-loader',
						'sass-loader'
					],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jquery': 'jquery',
			'window.jQuery': 'jquery',
			'Popper': 'popper.js',
			'Util': 'exports-loader?Util!bootstrap/js/dist/util',
		})
	]
}
