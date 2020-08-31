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
}