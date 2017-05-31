var webpack = require('webpack'),
    path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var buildDir = path.resolve(__dirname, 'build'),
    srcDir = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        app: path.resolve(srcDir, 'app/main.js'),
        vendors: path.resolve(srcDir, 'app/vendors.js'),
        polyfills: path.resolve(srcDir, 'app/polyfills.js')
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(buildDir)
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [ 
                                    require('autoprefixer'),
                                    require('cssnano')
                                ]
                            }
                        }, 
                        { 
                            loader: 'less-loader',
                            options: {
                                paths: [ path.resolve(srcDir, 'styles') ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendors' 
        }),
        // 
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ 
            comments: false 
        }),
        new ExtractTextPlugin('styles.min.css')
    ]
}