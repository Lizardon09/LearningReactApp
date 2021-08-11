const webpack = require('webpack');
const { resolve } = require('path');
const { mergeWithCustomize } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
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
        publicPath: '/LearningReactApp/',
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
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'static/config.js',
                    to: 'config/config.js',
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: 'static/index.html',
            inlineSource: 'runtime~.+\\.js',
            chunksSortMode: 'none',
            favicon: 'static/favicon.ico',
        }),
        new InlineSourcePlugin(HtmlWebpackPlugin),
        new webpack.DefinePlugin({
            'process.env': {
              REACT_APP_LANG: process.env.REACT_APP_LANG ? `"${process.env.REACT_APP_LANG}"` : '"en"', // Use the env var set at build time
            },
        }),
    ],
}

)