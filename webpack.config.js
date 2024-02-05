'use strict';
// const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     template: path.resolve(__dirname, 'src', 'index.html')
    //   })],
    watch: true,

    devtool: "source-map",

    module: {
        rules: [
          // {
          //   test: /\.html$/i,
          //   loader: 'html-loader',
          // },
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