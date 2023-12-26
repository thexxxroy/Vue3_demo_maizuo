# 仿卖座网项目

技术栈：html、css（Scss）、vue3、vant 组件库、Vue Router、swiper、axios、

屏幕适配：vite/VLI（webpack）-> postcss 工具 -> plugins -> postcss-px-to-viewport

#### 1、创建项目

创建 vue cli

```
create vue "name"
```

安装 vue 环境（如果是导入没有 node——modeles 的项目）

```
npm install
```

运行 Cli

```
npm run serve
```

安装 axios

```
npm install axios
```

安装 vant 组件库：

```
npm install vant
```

安装 vant 插件 (还可以局部或者全局注册，这里选择插件)

安装 css 转 vw 工具

```
npm install postcss --save-dev
```

```
npm i @vant/auto-import-resolver unplugin-vue-components -D
```

配置基于 cli 的 vant 插件——项目文件——vue.config.js

```
const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
};
```

手写 css 基础重置样式，导入 main.js

```
import "./assets/css/reset.scss"
```

配置 axios.defaults.baseURL“基础地址”

```
const baseURL = "https://api.iynn.cn/film/api/v1/"
axios.defaults.baseURL = baseURL
```

前端配置跨域请求

```
//*vue.config.js：
		devServer: {
   	 proxy: {
      "/api": {
        target: "https://api.iynn.cn/film/api/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
```

```
//*main.js
	import Axios from 'axios'
	Axios.defaults.baseURL = '/api'
```

```
//move-list.vue
	import axios from "axios"
		axios.get("v1/getNowPlayingFilmList").then(res=>{
  		console.log(res);
	})
```

配置 Vue Router

```
//流程：
//1、创建router并配置路由映射关系并且在main.js中导入并使用router
//2、在App.vue（根主页面）中写<router-view/>占位组件，告诉它这个页面需要放在什么位置
//3、router-link路由跳转

//router\index.js
import { createRouter, createWebHashHistory } from "vue-router"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect:"/movie" }, //默认路径
    { path: "/movie", component: movie },
    { path: "/city", component: city },
  ],
})
export default router

//main.js mount前面注册router
import router from "./router"
createApp(App).use(router).mount("#app")

```
