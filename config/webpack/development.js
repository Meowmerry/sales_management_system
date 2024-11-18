const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/javascript/packs/application.js',
    output: {
        path: path.resolve(__dirname, 'public/packs'),
        filename: 'application.js',
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
