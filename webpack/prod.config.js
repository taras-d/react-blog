var webpack = require('webpack'),
    merge = require('webpack-merge'),
    path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var paths = require('./paths.js'),
    baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    output: {
        filename: '[name].[hash].min.js',
        path: path.join(paths.buildDir, 'app')
    },
    module: {
        rules: [
            // Process .js and .jsx files
            // Use babel-loader to transform ES2015/JSX to ES5
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
            // Process .less files
            // Use:
            // - css-loader to process css @imports and minify
            // - postcss-loader to add vendor prefixes
            // - less-loader to process less
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { 
                            loader: 'css-loader', 
                            options: { 
                                minimize: {
                                    discardComments: { removeAll: true }
                                }
                            } 
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [ require('autoprefixer') ]
                            }
                        }, 
                        { 
                            loader: 'less-loader',
                            options: {
                                paths: [ path.join(paths.srcDir, 'styles') ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        // Put common modules in vendors.js
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendors' 
        }),
        // Enable production mode
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        // Minify bundles
        new webpack.optimize.UglifyJsPlugin({ 
            comments: false 
        }),
        // Extract css to single file
        new ExtractTextPlugin({
            filename: 'styles.[hash].min.css'
        }),
        // Include bundles in the index.html
        new HtmlWebpackPlugin({
            template: path.join(paths.srcDir, 'index.html'),
            filename: path.join(paths.buildDir, 'index.html')
        })
    ]
});