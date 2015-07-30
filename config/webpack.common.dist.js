'use strict';


module.exports = {
    devtool: 'eval',
    entry: './index.js',
    resolve: {
        extensions: ['', '.js'],
    },
    loaders: [
        { test: /\.js$/, loader: 'val-loader?harmony' },
    ]
};
