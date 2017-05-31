var webpack = require('webpack'),
    path = require('path');
    
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var srcDir = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        // Split code to app, vendors and polyfills
        // Make sure to include these files in correct order: vendors, polyfills, app
        app: path.resolve(srcDir, 'app/main.js'),
        vendors: path.resolve(srcDir, 'app/vendors.js'),
        polyfills: path.resolve(srcDir, 'app/polyfills.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(srcDir, 'output')
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
                            // Include 'styles' folder to simplify import for variables and mixins
                            // For example, "@import '../../../styles/variables'" can be changed to "@import 'variables'"
                            // Note, to avoid style duplications use 'reference' directive, for example "@import (reference) 'mixins'"
                            // (https://github.com/webpack-contrib/less-loader/issues/7)
                            paths: [ path.resolve(srcDir, 'styles') ]
                        }
                    },
                ]
            }
        ]
    },
    devServer: {
        contentBase: srcDir,
        overlay: true
    },
    plugins: [
        // Use CommonsChunkPlugin to put all common modules in one place (vendors.js)
        new  webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendors' 
        }),
        // Uncomment line below to enable Bundle Analyzer, then run 'npm run server'
        //new BundleAnalyzerPlugin()
    ]
}