const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'dev';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'points'),
    pub: path.join(__dirname, 'public')
};

module.exports = {
    entry: {
        'scripts/index': PATHS.source + '/index.js'

    },
    output: {
        path: PATHS.pub,
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // chunks:['/scripts/index'],
            // favicon: 'public/src/favicon.ico',
            template: PATHS.source + '/pug/index.pug'
        })
    ],
    // devtool: NODE_ENV === 'dev' ? 'source-map' : false,
    // watch: NODE_ENV === 'dev' ? true : false,
    watchOptions: {
        // aggrigateTimeout: 100
    },
    module: {

        rules: [
            // {
            //     test: /\.js$/,
            //     enforce: "pre",
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/,
            // },
            {
                test:/\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty:true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react']
                }
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
                // loader: 'url-loader?limit=100000',
                use: [
                    'url-loader?limit=100000'
                ]
            },
            // {
            //     test: /\.(png|svg|ttf|eot|woff|otf|woff2)$/,
            //     // loader: 'file-loader',
            //     use: [
            //         'file-loader'
            //     ]
            // }
        ]

    },
    devServer: {
        inline: true,
        contentBase: '/',
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        stats: 'errors-only',
        port: 1488,
        historyApiFallback: true,
        // hot: true
        // historyApiFallback: {
        //     historyApiFallback: true,
        //     disableDotRule: true
        // },

    }
    // ,
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'build'),
    //     inline:true,
    //     port:6942
    // }
    // ,
    // resolve:{
    //     extensions:['js', 'cofee','','ts'],
    //     alias:{
    //         api:path.resolve(__dirname,'api.js')
    //     }
    // }
}
if (NODE_ENV === 'prod') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}