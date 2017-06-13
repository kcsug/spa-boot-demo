const path = require('path');
const webpack = require('webpack');
const argv = require('yargs').argv;
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');


const config = {
	resolve: {
		modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules']
	},
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
		},{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', {
				loader: 'sass-loader',
				options: {
					data: '@import "~terra-legacy-theme/lib/LegacyTheme.scss"; $terra-bidi: true;',
				}
			}]
		}, {
			test: /\.(woff|woff2|svg|ttf|eot|png|gif|ico)(\?\S*)?$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
		}]
	},
	plugins: [
		new I18nAggregatorPlugin({
			baseDirectory: __dirname,
			supportedLocales: i18nSupportedLocales
		})
	],
	output: {
		path: path.join(__dirname, './src/main/resources/public/'),
		filename: '[name].js'
	}
};


module.exports = config;
