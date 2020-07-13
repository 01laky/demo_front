const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
	optimization: {
		minimize: false
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'app.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html"
			// filename: "./dist/index.html"
		})
	]
};