/**
 * Created by jojoldu@gmail.com on 2017. 4. 11.
 * Blog : http://jojoldu.tistory.com
 * Github : http://github.com/jojoldu
 */

let webpack = require('webpack');
const entry = './src/main/resources/static/js/hello.js';
const output = {
    path: __dirname+'/src/main/resources/static/build/',
    filename: 'bundle.js'
};

module.exports.plugins = [
    new webpack.LoaderOptionsPlugin({
        debug: true
    })
];

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: entry,
    output: output,
    module : {
        loaders : [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};