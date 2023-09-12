const { defineConfig } = require("@vue/cli-service")

const { VantResolver } = require("@vant/auto-import-resolver")
const ComponentsPlugin = require("unplugin-vue-components/webpack")

module.exports = defineConfig({
  transpileDependencies: true,
  //前端跨域请求
  devServer: {
    open: true, // vue项目启动时自动打开浏览器
    proxy: {
      "/api": {
        target: "https://api.iynn.cn/film/api/v1",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      // https://api.iynn.cn/film/api/v1/getNowPlayingFilmList
    },
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})
