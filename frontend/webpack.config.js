const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Determine which environment we're in
const isDevelopment = process.env.NODE_ENV !== 'production';

// Define API URL based on environment
const API_URL = isDevelopment 
    ? 'http://localhost:3000/api/v1/products'
    : 'https://sales-management-backend-nq4p.onrender.com/api/v1/products';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            // path.resolve(__dirname, 'frontend')
        ],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
        new webpack.DefinePlugin({
            'API_URL': JSON.stringify(API_URL)
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true,
        compress: true,
    },
    devtool: 'source-map',
};