const path = require('path');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const { vendor } = require('postcss');


module.exports = merge(common, {
    module : 'production',
    devtool : 'hidden-source-map',
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'style.[contenthash].css',
            chunkFilename : '[id].[contenthash].css'
        })
    ],
    module : {
        rules : [
            {
                test : /\.(c|sa|sc)ss$/i,
                exclude : /node_modules/,
                use : [
                    {loader : MiniCssExtractPlugin.loader},
                    {loader : 'css-loader'},
                    {loader : 'postcss-loader', options : {
                        postcssOptions : {
                            config : path.resolve(__dirname, 'postcss.config.js')
                        }
                    }},
                    {loader : 'sass-loader'},
                ]
            }
        ]
    },
    optimization : {
        moduleIds : 'deterministic',
        runtimeChunk : 'single',
        splitChunks : {
            cacheGroups : {
                vendor : {
                    test : /[\\/]node_modules[\\/]/,
                    name : 'vendors',
                    chunks : 'all'
                }
            }
        }
    },
    output : {
        filename : '[name].[contenthash].js'
    }
});
