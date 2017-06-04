var path = require('path');

var paths = require('./paths.js');

module.exports = {
    entry: {
        // Split code to app, vendors and polyfills
        // These files will be automatically included in the index.html by HtmlWebpackPlugin
        app: path.resolve(paths.srcDir, 'app/main.js'),
        vendors: path.resolve(paths.srcDir, 'app/vendors.js'),
        polyfills: path.resolve(paths.srcDir, 'app/polyfills.js')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            // Aliases for common components and containers
            components: path.resolve(paths.srcDir, 'app/components'),
            containers: path.resolve(paths.srcDir, 'app/containers')
        }
    }
};