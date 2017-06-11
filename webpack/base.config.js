var path = require('path'),
    webpack = require('webpack');

var paths = require('./paths.js');

module.exports = {
    entry: {
        // Split code to app, vendors and polyfills
        // These files will be automatically included in the index.html by HtmlWebpackPlugin
        app: path.join(paths.srcDir, 'app/main.js'),
        vendors: path.join(paths.srcDir, 'app/vendors.js'),
        polyfills: path.join(paths.srcDir, 'app/polyfills.js')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            // Aliases for common components and containers
            // (https://webpack.js.org/configuration/resolve/#resolve-alias)
            components: path.join(paths.srcDir, 'app/components'),
            containers: path.join(paths.srcDir, 'app/containers')
        }
    },
    module: {
        rules: [
            // Process .js and .jsx files
            // Use babel-loader to transform ES2015/JSX to ES5
            {
                test: /\.jsx?$/,
                include: [
                    path.join(paths.srcDir, 'app')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    plugins: [
        // Put common modules in vendors chunk
        new  webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendors' 
        })
    ]
};