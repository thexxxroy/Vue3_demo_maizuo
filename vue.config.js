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
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       //依次导入的公用的scss变量，公用的scss混入，共用的默认样式
  //       prependData: `
  //        @import "./src/assets/css/mixins.css";  
  //       `,
  //     },
  //   },
  // },
})
