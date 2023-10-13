<template>
  <div class="movie">

    <div class="nav-bar">
      <div class="title">卖座电影</div>
      <div class="location" @click="cityClick">{{ cityData.name }} ></div>
    </div>

    <div class="content">
      <van-tabs
        color="#ff5f16"
        line-width="3.5rem"
        title-active-color="#ff5f16"
      >
        <van-tab title="正在热映">
          <movie-list :apiURL="hotURL" />
        </van-tab>
        <van-tab title="即将上映">
          <movie-list :apiURL="soonURL" />
        </van-tab>
      </van-tabs>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script setup>
import movieList from "@/components/movieList.vue"
import router from "@/router"
import { ref } from "vue"
import { showDialog } from "vant"
import "vant/es/dialog/style"


const cityData = ref()
//选择城市相关操作
if (localStorage.nowCity) {
  // 通过本地拿到数据
  cityData.value = JSON.parse(localStorage.nowCity)
} else {
  showDialog({
    message: "请选择城市",
    theme: "round-button",
  }).then(() => {
    router.push({ path: "/city" })
  })
}

//定义接口,获取数据(两种拼接方法)
const hotURL = ref(
  "getNowPlayingFilmList?cityId=" + cityData.value.cityId + "&pageSize="
)
const soonURL = ref(
  "getComingSoonFilmList?cityId=" + cityData.value.cityId + "&pageSize="
)

//点击左上角跳转到city页面
const cityClick = () => {
  router.push({
    path: "/city",
  })
}
</script>

<style lang="scss" scoped>
.movie{
  padding-bottom: 50px;
.nav-bar {
  height: 45px;
  line-height: 45px;
  color: #fff;
  background-color: #ff5f16;
  text-align: center;
  .title {
    position: relative;
    font-size: 18px;
  }
  .location {
    padding: 0 10px;
    position: absolute;
    top: 0;
    left: 0;
    a {
      color: #fff;
    }
  }
}
}
</style>
