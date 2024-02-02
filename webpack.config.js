'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: 'bundle.js',
    },
    watch: true,

    devtool: "source-map",

    module: {
        rules: [
            {
              test: /\.(?:js|mjs|cjs)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', { 
                        targets: "defaults",
                        debug: true,
                        corejs: 3,
                        useBuiltIns: "usage"  
                    }]
                  ]
                }
              }
            }
        ]
    }
}