const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    /**
     * 加载静态资源相对路径
     */
    // publicPath: process.env.VUE_APP_OUTPUT_DIR == 'production'?'/':'./',
    publicPath: '/',
    /**
     * 请求代理
     */
    devServer: {
        port: 8899,
    },
    // lintOnSave: false,
    lintOnSave: 'warning',
    outputDir: process.env.VUE_APP_OUTPUT_DIR,
    /**
     * style-resources-loader 公用样式处理
     */
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                //这个是加上自己的路径，
                //注意：试过不能使用别名路径
                path.resolve(__dirname, "./src/assets/style/reset.less"),
                path.resolve(__dirname, "./src/assets/style/common.less"),
                path.resolve(__dirname, "./src/assets/style/theme.less")
            ]
        }
    },
    //设置为false以加速生产环境构建
    productionSourceMap: false,
    configureWebpack: ()=>{
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
                        threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
                        deleteOriginalAssets: false, // 是否删除原文件
                        minRatio: 0.8
                    })
                ]
            }
        }
    }
}