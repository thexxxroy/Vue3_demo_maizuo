<template>
  <div class="city">
    <van-nav-bar title="城市列表" left-text="返回" left-arrow />
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script setup>
import { getCityList } from "@/servies/modules/city"
import { ref } from "vue"

//获取城市数据并保存到变量
const cityList = ref({})
getCityList().then(res => {
  console.log(res.data)
  cityList.value = res.data
})

//定义首字母列表 A～Z用来判断
</script>

<style lang="scss" scoped></style>
