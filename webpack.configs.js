let HtmlWebpackPlugin = require('html-webpack-plugin');
let paths = require('path');
let env = require('dotenv');

new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml,
    NODE_ENV: env.raw.NODE_ENV
})