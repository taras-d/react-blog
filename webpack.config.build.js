/**
 * Webpack build config
 */

var webpack = require('webpack'),
    path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var buildDir = path.resolve(__dirname, 'build'),
    srcDir = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        // Split code to app, vendors and polyfills
        // These files will be automatically included in the index.html by HtmlWebpackPlugin
        app: path.resolve(srcDir, 'app/main.js'),
        vendors: path.resolve(srcDir, 'app/vendors.js'),
        polyfills: path.resolve(srcDir, 'app/polyfills.js')
    },
    output: {
        filename: '[name].[hash].min.js',
        path: path.resolve(buildDir, 'app')
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
                                paths: [ path.resolve(srcDir, 'styles') ]
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
            filename: path.resolve(buildDir, 'index.html'),
            template: path.resolve(srcDir, 'index.html')
        })
    ]
}