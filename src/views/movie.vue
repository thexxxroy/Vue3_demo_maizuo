<template>
  <div class="movie">
    <div class="nav-bar">
      <div class="title">卖座电影</div>
      <div class="location" @click="cityClick">
        成都
        <!-- <router-link to="/city">成都 ></router-link> -->
      </div>
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
  </div>
</template>

<script setup>
import movieList from "@/components/movieList.vue"
import router from "@/router";
import { ref } from "vue"

//定义接口
const hotURL = ref("getNowPlayingFilmList")
const soonURL = ref("getComingSoonFilmList")

const cityClick = () => {
  router.push({
    path:'/city'
  })
}
</script>

<style lang="scss" scoped>
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
    z-index: 99;
    width: 50px;
    position: absolute;
    top: 0;
    left: 0;
    a {
      color: #fff;
    }
  }
}
</style>
