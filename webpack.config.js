var path = require('path');
var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); 
module.exports = {
  entry:{ pages:['webpack/hot/dev-server',path.resolve(__dirname, './app/src/app.jsx')],
          vendors:['react','react-dom']
  },//抽取公共模块
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  devServer: {
  	port:777,
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
  },
   module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:
            {
                presets: ['react', 'es2015'],
            }
        },
        {
	        test: /\.css$/,
	        loader: 'style!css'
        },
        { 
        	test: /\.(png|jpg)$/, 
        	loader: 'url?limit=8192&name=/img/[name].[ext]'   //ext 后缀名
        },
        {
	        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, 
	        loader: 'url' 
         }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热更新插件
        new OpenBrowserPlugin({
        	url:'http://localhost:777/'
        }),
        new webpack.optimize.CommonsChunkPlugin({//抽取公共插件
          name:'vendors',
          fiflename:'vendors.js'
        }),
        new webpack.ProvidePlugin({
        	$:'jquery'
        })
    ],
};