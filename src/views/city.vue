<template>
  <div class="city">
    <van-nav-bar
      title="城市列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-index-bar highlight-color="#ff5f16">
      <template v-for="(tag, index) in finalCityList" :key="index">
        <van-index-anchor :index="tag.frist" />
        <template v-for="iten in tag.listData" :key="index">
          <van-cell :title="iten.name" @click="cityClick(iten)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>


import router from "@/router";
import { getCityList } from "@/servies/modules/city"
import { ref } from "vue"

const onClickLeft = () => history.back()
const cityList = ref([]) //获取城市数据并保存到变量
const finalCityList = ref({})

//选择城市并跳转到首页
const cityClick = city => {
  localStorage.nowCity = JSON.stringify(city) //拿到的数据存到浏览器
  router.push({path:'/'})
}

getCityList().then(res => {
  cityList.value = res.data.cities
  // const cityItem = cityList.value

  //定义首字母列表 A～Z用来判断
  const letter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]
  //数组存储整理好的数据
  const formalCity = []
  for (let i = 0; i < letter.length; i++) {
    //存放同首字母的城市列表
    const list = []
    cityList.value.forEach(item => {
      //获取每一个城市的首字母转大写
      const itemInitial = item.pinyin.charAt(0).toUpperCase()
      // console.log(itemInitial);
      //判断cityList里城市首字母和当前遍历的letter[i]是否相等
      if (itemInitial === letter[i]) {
        //相等则存到数组
        list.push(item)
      }
    })
    // console.log(list);

    formalCity.push({
      frist: letter[i],
      listData: list,
    })
  }
  finalCityList.value = formalCity
})
</script>

<style lang="scss" scoped></style>
