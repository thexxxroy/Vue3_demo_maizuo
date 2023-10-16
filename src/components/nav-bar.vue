<template>
  <div class="nav-bar">
    <div class="title">电影</div>
    <div class="location" @click="cityClick">{{ cityData.name }} ></div>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { showDialog } from "vant"
import "vant/es/dialog/style"
const router = useRouter()

//点击左上角跳转到city页面
const cityClick = () => {
  console.log("cityClick");
  router.push({
    path: "/city",
  })
}

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
    padding: 0 10px;
    position: absolute;
    top: 0;
    left: 0;
    a {
      color: #fff;
    }
  }
}
</style>
