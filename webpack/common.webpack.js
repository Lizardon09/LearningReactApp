require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const fs = require('fs');

// Read in the babel config and supply it directly here, as through webpack
// babel has issues reading the config file (rarely actually reads it).
const babelrc = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.babelrc'), 'utf-8'));

// Use local node_modules instead of the component library's node_modules for
// styled-components.
// Without this styled-components creates two instances, which prevents themes
// from being used and causes react hook errors.
const localNodeModules = path.resolve(__dirname, '../', 'node_modules');

module.exports = {
    mode: 'development',
    context: resolve(__dirname, '../src'),
    stats: 'verbose',
    entry: ['../src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          'react-dom': '@hot-loader/react-dom',
          '@lodash': 'lodash-es',
          'styled-components': path.join(localNodeModules, 'styled-components'),
          '@@': path.resolve(__dirname, '../src/'),
        },
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    watchOptions: {
        ignored: ['.git', 'node_modules'],
    },
    module : {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: babelrc,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      hash: 'sha512',
                      digest: 'hex',
                      name: 'img/[contenthash].[ext]',
                    },
                  },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                      optipng: { optimizationLevel: 7 },
                      gifsicle: { interlaced: false },
                    },
                  },
                ],
            },
        ]
    },
    optimization: {
        moduleIds: 'named',
    },
    plugins: [
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
};