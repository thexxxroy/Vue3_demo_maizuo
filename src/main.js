import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"

//引入基础充值样式
import "./assets/css/reset.scss"

createApp(App).use(router).mount("#app")
