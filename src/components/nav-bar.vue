<template>
  <div class="nav-bar">
    <div class="title">{{ title }}</div>
    <div class="location" @click="cityClick" v-if="cityData" >
      {{ cityData.name }} >
    </div>
    <div v-else></div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { showDialog } from "vant"
import "vant/es/dialog/style"
const router = useRouter()

defineProps({
  title: {
    default: "默认标题",
  },
})
//点击左上角跳转到city页面
const cityClick = () => {
  console.log("cityClick")
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
  text-align: center;
  height: 45px;
  line-height: 45px;
  color: #fff;
  background-color: #ff5f16;
  .title {
    position: relative;
    font-size: 18px;
  }
  .location {
    position: absolute;
    top: 0;
    left: 0;
    a {
      color: #fff;
    }
    padding: 0 10px;

  }
}
</style>
