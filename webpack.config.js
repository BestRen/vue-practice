const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const style = new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true })
module.exports = {
    entry: {
        common: ['babel-polyfill', 'vue', 'vue-router', 'vuex', 'element-ui', 'exif-js', './src/scss/import.scss'],
        build: ['./src/index.js', './src/scss/index.scss']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: style.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: 'postcss-loader'
                    }]
                })
            },
            {
                test: /\.scss$/,
                use: style.extract({
                    use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        { loader: 'sass-loader' }
                    ]
                })
            },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        useRelativePath: false,
                        publicPath: '../',
                        name: 'font/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        useRelativePath: false,
                        publicPath: './',
                        name: 'img/[name].[ext]'
                    }
                }]
            }
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    devServer: {
        historyApiFallback: false,
        contentBase: "dist",
        noInfo: true,
        open: true,
        port: 8086
    },
    plugins: [
        style,
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            minChunks: Infinity
        })
    ],
    devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            },
            'APIUrl': JSON.stringify("http://pro.example.com")
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true
            }
        })
    ])
} else {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'APIUrl': JSON.stringify("http://dev.example.com")
        })
    ])
}