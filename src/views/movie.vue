<template>
  <div class="movie">
    <navbar title="电影"></navbar>

    <div class="content">
      <van-tabs
        color="var(--main-color)"
        line-width="3.5rem"
        title-active-color="var(--main-color)"
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

const cityData = ref({})


//定义接口,获取数据(两种拼接方法)
const hotURL = ref(
  "getNowPlayingFilmList?cityId=" + cityData.value.cityId + "&pageSize="
)
const soonURL = ref(
  "getComingSoonFilmList?cityId=" + cityData.value.cityId + "&pageSize="
)

</script>

<style lang="scss" scoped>
.movie {
  padding-bottom: 40px;
}
</style>
