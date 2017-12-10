const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// HTML Pages
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
const HTMLWebpackPluginConfigAbout = new HTMLWebpackPlugin({
	template: __dirname + '/app/about.html',
	filename: 'about.html',
	inject: 'body'
});

const SassBundle = new ExtractTextPlugin({ 
	filename: '[name].bundle.css',
	allChunks: true,
});

module.exports = {
	entry: [
		__dirname + '/app/js/index.js',
		__dirname + '/app/sass/index.sass'
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(css|sass|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "file-loader"
			},
			{
				test: /\.(html)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "html-loader"
			},
			{
				test: /\.(woff|woff2)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?prefix=font/&limit=5000"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/svg+xml"
			},
			{
				test: /\.gif/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/gif"
			},
			{
				test: /\.jpg/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/jpg"
			},
			{
				test: /\.png/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/png"
			},
		]
	},
	output: {
		filename: 'build.js',
		path: __dirname + '/build'
	},
	plugins: [
		HTMLWebpackPluginConfig,
		HTMLWebpackPluginConfigAbout,
		SassBundle,
		new FaviconsWebpackPlugin(__dirname + '/app/img/favicon.png')
	]
};