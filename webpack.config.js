var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'calender.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot','babel-loader?presets[]=es2015,presets[]=react'],
			exclude: /node_modules/,
			include: path.join(__dirname,'src')
		},
		{	test: /\.scss$/,
			loader: "style!css!sass"
		}]
	}
};
