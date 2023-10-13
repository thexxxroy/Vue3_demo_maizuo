import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"

//引入基础样式
import "./assets/css/reset.css"
import "./assets/css/common.css"

createApp(App).use(router).mount("#app")
