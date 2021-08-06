const webpack = require('webpack');
const { resolve } = require('path');
const { mergeWithCustomize } = require('webpack-merge');
const commonClientConfig = require('./common.webpack');

module.exports = mergeWithCustomize({
    customizeArray(a, b, key) {
      if (key === 'module.rules') {
        const testList = b.map((item) => item.test.toString());
        return a.filter((item) => !testList.includes(item.test.toString())).concat(b);
      }
      return undefined;
    },
})(commonClientConfig, {
    entry: { main: ['./index.js'] },
    mode: 'production',
    devtool: false,
    output: {
        path: resolve(__dirname, '../dist'),
        chunkFilename: '[name].js',
        filename: 'js/[name].min.js',
        publicPath: '',
    },
    module: {
        rules: [],
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
          automaticNameDelimiter: '-',
        },
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
          exclude: /node_modules/,
          columns: true,
          test: /\.js?$/,
          filename: 'js/[name].[chunkhash].js.map',
        }),
    ],
}

)