const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const paths = require('./paths')
const ruleJS = require('./rules/ruleJS')
const ruleCSS = require('./rules/ruleCSS')
const ruleStatic = require('./rules/ruleStatic')
const vendors = require('./vendors')
module.exports = {
    entry: {
        main: path.resolve(paths.src, 'index.js'),
        vendor:[require.resolve('./polyfills-client.js')].concat(vendors)
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: paths.build,
        publicPath: '/build/',
    },
    resolve: {
        modules: [paths.src, 'node_modules']
    },
    recordsPath: path.resolve(paths.root, 'webpack-records.json'),
    module: {
        rules: [
            ruleJS.prod,
            ruleCSS.global.prod,
            ruleCSS.cssModule.prod,
            ruleStatic,
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new AssetsPlugin({
            filename: 'webpack-assets.json',
            path: paths.root,
            prettyPrint: true,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
            allChunks: true,
        }),
        new webpack.SourceMapDevToolPlugin({
            test: /.js$/,
            filename: '[file].map',
            exclude:[/vendor/, /manifest/]
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false,
                unused: true,
                dead_code: true
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        crypto: 'empty'
    }
}