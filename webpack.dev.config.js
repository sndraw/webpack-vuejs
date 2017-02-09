var webpack = require('webpack');
var path = require('path');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹
var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
    //插件项
    //页面入口文件配置
    entry: {
        index: path.resolve(__dirname, './app/js/index.js')
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './dev'), // 设置输出目录
        publicPath: "/", //静态文件目录，如果网站路径直接指到dev目录，请注意改为/
        filename: 'js/[name].js', // 输出文件名
        chunkFilename: 'js/[name].js', // 按需加载模块输出文件名
    },
    resolve: {
        root: [],
        alias: {
            vue: 'vue/dist/vue.js',
            // jquery: 'jquery'
        },
       //设置require或import的时候可以不需要带后缀
        extensions: ['', '.js', '.less', '.css','vue']
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.vue$/,
                loader: "vue"
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: [
                        [
                            "component", [
                            {
                                "libraryName": "element-ui",
                                "styleLibraryName": "theme-default"
                            }
                        ]
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            }, {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 10240, //10kb 图片转base64。设置图片大小，小于此数则转换。
                    name: 'images/[name].[hash:8].[ext]' //输出目录以及名称
                }
            }, {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'file',
                query: {
                    name: 'fonts/[name].[hash:8].[ext]' //输出目录以及名称
                }
            }, {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader?exclude=/upload/'
            }, {
                test: /\.json$/,
                loader: 'json-loader',
                query: {
                    name: 'json/[name].[hash:8].[ext]' //输出目录以及名称
                }
            },

        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        // new webpack.ProvidePlugin({
        //    $: "jquery",
        //    jQuery: "jquery",
        //    "window.jQuery": "jquery"
        // }),
//        new CleanWebpackPlugin(['css','js'], {
//            root: path.resolve(__dirname, './dev'),
//            verbose: true,
//            dry: false,
//            exclude: []
//        }),
        // 分离css
        new ExtractTextPlugin('css/[name].css', {
            //true为全部模块的css都分离，包括按需加载的css，统一根据入口文件打包，false只分离非按需加载模块的css，按需加载模块的css打包入js
            allChunks: true
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     filename: "js/vendor.js",
        //     async: false
        // }),
        //压缩打包的文件
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: {
        //         except: ['$super', '$', 'exports', 'require']
        //         //以上变量‘$super’, ‘$’, ‘exports’ or ‘require’，不会被混淆
        //     },
        //     compress: {
        //         //supresses warnings, usually from module minification
        //         warnings: false
        //     }
        // }),
        //允许错误不打断程序
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: __dirname + '/dev/index.html', //目标文件
            template: __dirname + '/app/index.html', //模板文件
            favicon: __dirname + '/app/images/favicon.ico',
            inject: 'body',
            hash: false, //默认为true,代表js、css文件后面会跟一个随机字符串,解决缓存问题
            chunks: ['index'],
            chunksSortMode: 'auto'
        }),
        //把指定文件夹下的文件复制到指定的目录
        new TransferWebpackPlugin([
            {from: 'data', to: 'data'}
        ], path.resolve(__dirname, './app'))
    ],
    devServer: {//服务器
        historyApiFallback: true,
        progress: true,
        port: 8080,
        proxy: {//接口转发
            '/api': {
                target: 'http://localhost', //转发地址
                pathRewrite: {'^/api': ''}//路由重写，与target组装成新的地址,如“/api/getlogo”转发到“http://localhost/getlogo”
            }
        }
    }

};