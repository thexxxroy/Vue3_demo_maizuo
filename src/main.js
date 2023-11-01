import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"
import tabbar from "./components/tabbar.vue"//注册全局组件tabbar


//引入基础样式
import "normalize.css"
import "./assets/css/reset.css"
import "./assets/css/common.css"
import "./assets/css/vant.css"
// import "./assets/css/mixins.css"

createApp(App)
.use(router)
.component('tabbar',tabbar)//挂载全局组件tabbar
.mount("#app")
