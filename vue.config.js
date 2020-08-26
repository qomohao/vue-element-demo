const path = require("path");

module.exports = {
    /**
     * 加载静态资源相对路径
     */
    publicPath: './',
    /**
     * 请求代理
     */
    devServer: {
        port: 8899, 
    },
    lintOnSave:false,
    outputDir:process.env.VUE_APP_OUTPUT_DIR,
    /**
     * style-resources-loader 公用样式处理
     */
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                //这个是加上自己的路径，
                //注意：试过不能使用别名路径
                path.resolve(__dirname, "./src/assets/style/common.less"),
            ]
        }
    },
}