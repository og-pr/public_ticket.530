// webpack is similar to gulp BUT specialized to only bundle
// ref = https://webpack.js.org/concepts/loaders/

const webpack = require('webpack');
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // per https://webpack.js.org/plugins/uglifyjs-webpack-plugin/

module.exports = {    
    entry: "./index.web.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/bundle.js",
        sourceMapFilename: "js/bundle.map"
        },
    devtool: 'source-map', // enable = create .map files
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            extractComments: 'all', // options = true, all 
          }),
        ],
    },
    resolve: { 
        alias: {
            '@react-native-community/async-storage': 'react-native-web'
            },
        modules: ['node_modules']
        },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [ 
                { loader: 'babel-loader' },
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]' 
                    } 
                }],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'],
            },
            {
                //test: /\.s[ac]ss$/i,
                test: /\.s[a]ss$/i,
                use: [ 'style-loader', 'css-loader', 'sass-loader', ],
            },
            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts/', // where the fonts will go
                    }
                }]
            },
        ]
    }
};
