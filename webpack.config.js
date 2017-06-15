const path = require('path');
const webpack = require('webpack');
const argv = require('yargs').argv;

const config = {
	entry: {
		bundle: './src/main/resources/assets/application.react.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(woff|woff2|svg|ttf|eot|png|gif|ico)(\?\S*)?$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
		}]
	},
	output: {
		path: path.join(__dirname, './src/main/resources/public/'),
		filename: '[name].js'
	}
};


module.exports = config;
