<template>
  <div class="movie">
    <navbar></navbar>

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
import navbar from "@/components/nav-bar.vue"
import movieList from "@/components/movieList.vue"

import { ref } from "vue"

const cityId = ref(JSON.parse(localStorage.nowCity))

//定义接口,获取数据(两种拼接方法)
const hotURL = ref(
  "getNowPlayingFilmList?cityId=" + cityId.value.cityId + "&pageSize="
)
const soonURL = ref(
  "getComingSoonFilmList?cityId=" + cityId.value.cityId + "&pageSize="
)

</script>

<style lang="scss" scoped>
.movie {
  padding-bottom: 50px;
}
</style>
