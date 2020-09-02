module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
                'common': '@/common',
            }
        }
    },
    publicPath: "./",
    assetsDir: "static",
    outputDir: 'dist',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://123.207.32.32:8000/api/x6',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}