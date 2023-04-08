const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    /**
     * Below 3 properties added to define NodeJs as the environment in which the bundle should run. i.e ignore node_modules directory when bundling.
     * Webpack was giving 55 errors from NodeModules without this.     webpack was going into NodeModules directory\\.
     * */
    target: 'node', // use require() & use NodeJs CommonJS style
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    externalsPresets: {
        node: true // in order to ignore built-in modules like path, fs, etc. 
    },
    mode: 'production',
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            // "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};