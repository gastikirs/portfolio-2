var path = require('path');
var webpack = require('webpack');


module.exports = {
	entry: __dirname + "/scripts/App.js",
	output: {
		path: __dirname + "/app/temp/scripts",
		filename: "App.js"
	},

	//Babel loader
	module: {
		rules: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}