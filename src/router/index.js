//导入（vue-router）库里面的（createRouter）等函数
import { createRouter, createWebHashHistory } from "vue-router"

//导入页面路径组件，以便routes中可以应引用
import movie from "@/views/movie.vue"
import city from "@/views/city.vue"
import movieDetail from "@/views/movieDetail.vue"
import NotFound from "@/views/NotFound.vue"
import cinema from "@/views/cinema.vue"
import cinemaDetail from "@/views/cinemaDetail.vue"

//懒加载 import函数会分包打包
//魔法注释：/* webpackChunkName: "movie" */ 打包时会命名文件
// const movie = () => import(/* webpackChunkName: "movie" */ "@/views/movie.vue")

//创建一个路由：路径和组件的映射关系
const router = createRouter({
  //创建路由后传入一个对象{}
  //指定采用的模式：hash
  history: createWebHashHistory(),
  routes: [
    //映射关系
    {
      path: "/",
      redirect: "/movie",
    },
    {
      path: "/movie",
      component: movie,
    },
    {
      path: "/city",
      component: city,
    },
    {
      path: "/movieDetail",
      component: movieDetail,
    },
    {
      path: "/cinema",
      component: cinema,
    },
    {
      path: "/cinemaDetail",
      component: cinemaDetail,
    },
    {
      path: "/:pathMatch(.*)",
      component: NotFound,
    },
  ],
})

export default router
