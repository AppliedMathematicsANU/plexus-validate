'use strict';
var extend = require('xtend');

var common = require('./webpack.common.dist');


module.exports = extend(common, {
    output: {
        path: './dist',
        filename: 'plexus-validate.js',
        libraryTarget: 'umd',
        library: 'PlexusValidate',
    },
});
