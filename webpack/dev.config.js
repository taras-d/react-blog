var path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge')
    
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var paths = require('./paths.js'),
    baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
    output: {
        filename: '[name].js',
        path: path.join(paths.srcDir, 'output')
    },
    devtool: 'source-map',
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
            // - style-loader to insert <style> tags in the DOM
            // - css-loader to process css @imports
            // - postcss-loader to add vendor prefixes
            // - less-loader to process less
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [ require('autoprefixer') ]
                        }
                    }, 
                    { 
                        loader: 'less-loader',
                        options: {
                            // Include 'styles' folder to simplify import for styles
                            // For example, "@import '../../../styles/base/variables'" can be changed to "@import 'base/variables'"
                            paths: [ path.join(paths.srcDir, 'styles') ]
                        }
                    },
                ]
            }
        ]
    },
    devServer: {
        contentBase: paths.srcDir,
        overlay: true,
        stats: 'minimal'
    },
    plugins: [
        // Put common modules in vendors.js
        new  webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendors' 
        }),
        // Include bundles in the index.html
        new HtmlWebpackPlugin({
            template: path.join(paths.srcDir, 'index.html')
        }),
        // Uncomment line below to enable Bundle Analyzer, then run 'npm run server'
        //new BundleAnalyzerPlugin()
    ]
});