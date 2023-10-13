<template>
  <div class="nav-bar">
    <div class="title">卖座电影</div>
    <div class="location" @click="cityClick">{{ cityData.name }} ></div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { router } from 'vue-router';
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
</script>

<style lang="scss" scoped></style>
