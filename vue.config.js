const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // 基础路径 部署生产环境和开发环境下的URL
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否保存的时候检查
  lintOnSave: true,
  runtimeCompiler: true,
  chainWebpack: () => {},
  configureWebpack: config => {
    if (process.env.NODE.ENV === 'production') {
      // 为生产环境修改配置
      config.mode = 'production'
      // 将每一个依赖包打包成单独的js文件
      var optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1]
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        },
        minimizer: [
          new UglifyPlugin({
            uglifyOptions: {
              compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log'] // 移除console.log
              }
            }
          })
        ]
      }
      Object.assign(config, {
        optimization
      })
    } else {
      // 为开发环境配置
      config.mode = 'development'
      var optimization2 = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1]
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      }
      Object.assign(config, {
        // 开发生产共同配置
        resolve: {
          extensions: ['.js', '.vue', '.json'], // 文件优先解析后缀名顺序
          alias: { // 配置别名
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@views': path.resolve(__dirname, './src/views'),
            '@utils': path.resolve(__dirname, './src/utils')
          },
          plugins: []
        },
        optimization: optimization2
      })
    }
  },
  // 生产环境是否生成sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  parallel: require('os').cpus().length > 1,
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    // 自动打开浏览器
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 使用代理
    proxy: {
      '/api': {
        // 目标代理服务器地址
        target: 'http://192.168.1.102:8080',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: () => {}
  },
  // 第三方插件配置
  pluginOptions: {}
}
