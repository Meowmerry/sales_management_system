const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './frontend/javascript/react/src/index.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            // JavaScript/JSX Rule
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            [
                                '@babel/plugin-proposal-private-methods',
                                { loose: true },
                            ],
                            [
                                '@babel/plugin-proposal-private-property-in-object',
                                { loose: true },
                            ],
                            [
                                '@babel/plugin-proposal-object-rest-spread',
                                { loose: true },
                            ],
                        ],
                    },
                },
            },
            // CSS Rule
            {
                test: /\.css$/,
                use: [
                    'style-loader',    // Injects CSS into the DOM
                    'css-loader',      // Resolves CSS imports
                    'postcss-loader',  // Processes CSS with PostCSS (including Tailwind)
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', path.resolve(__dirname, 'frontend/javascript')],
        alias: {
            backbone: 'backbone',
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/public/index.html',
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true,
        compress: true,
        watchFiles: ['frontend/javascript/react/src/**/*.js', 'public/**/*.html'],
    },

    devtool: 'source-map',
};