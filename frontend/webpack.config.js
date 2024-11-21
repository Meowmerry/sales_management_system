const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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