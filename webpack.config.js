const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
    entry: {
        main: './resources/js/main.js',
    },
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
                loader: 'ignore-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  { 
                      loader: 'css-loader', 
                      options: { 
                          importLoaders: 1,
                          url: false,
                      } 
                  },
                  'postcss-loader',
                  'sass-loader',
                ],
              },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
    ],
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    }
};

module.exports = config;