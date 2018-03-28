var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/main.ts',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	resolve: {
		extensions: ['.ts', '.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			components: path.resolve(__dirname, 'src/components')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: true,
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						// 'pjs': 'vue-loader!',
						js: 'vue-loader!ts-loader',
						ljs: 'buble-loader',
						scss: 'vue-style-loader!css-loader!sass-loader',
						sass:
							'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map',
	plugins: [new ExtractTextPlugin('style.css')]
};

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		// new webpack.optimize.UglifyJsPlugin({
		//   sourceMap: true,
		//   compress: {
		//     warnings: false
		//   }
		// }),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]);
} else if (process.env.NODE_ENV === 'test') {
	// test specific setups
	module.target = 'node';
	module.exports.externals = [require('webpack-node-externals')()];
	module.exports.devtool = 'inline-cheap-module-source-map';
}
