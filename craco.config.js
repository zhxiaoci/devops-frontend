const path = require("path");
const glob = require("glob");
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const  CircularDependencyPlugin = require("circular-dependency-plugin");
const { publicEncrypt } = require("crypto");

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
    webpack: {
      plugins: {
        add: [
          new CircularDependencyPlugin({
            exclude: /node_modules/,
            include: /src/,
            failOnError: false,
            allowAsyncCycles: false,
            cwd: process.cwd(),
          }),
          new WebpackBar(),
          // new MiniCssExtractPlugin(),
          // new PurgeCSSPlugin({
          //   paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
          // })
        ]
      },
      configure: (webpackConfig) => {  
        webpackConfig.output = {
          ...webpackConfig.output,
          publicPath: './',
          filename: 'static/js/[name].js',
          chunkFilename: 'static/js/[name].[contenthash:8].js',
          // devtoolNamespace: 'source-map'
        };
        webpackConfig.optimization.runtimeChunk = true;
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: 'all',
            minChunks: 2,
            minSize: 50000,
            maxSize: 100000,
            maxAsyncRequests: 10, // 最大异步请求数
            maxInitialRequests: 10, // 页面初始化最大异步请求数
            cacheGroups: {
              antd: {
                name: 'antd',
                test: /[\\/]node_modules[\\/]antd[\\/]/,
                priority: 20,
                reuseExistingChunk: true,
              },
              common: {
                name: 'react',
                test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|react-query|react-beautiful-dnd)[\\/]/,
                priority: 20,
                reuseExistingChunk: true,
              },
              vendor: {
                name: 'vendor',
                test: /[\\/]node_modules[\\/]/i,
                priority: 10,
                reuseExistingChunk: true,
              }
            }
          }
        }
        // 添加或修改 webpack 配置
        return {
          ...webpackConfig,
          // 你的配置
          resolve: {
            ...webpackConfig.resolve,
          }
        }
      }
    }
  };