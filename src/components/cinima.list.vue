<template>
  <div class="cinima-list">
    <template v-for="item in cinimaList">
      <div class="content">
        <div class="left">
          <div class="cinimaName">{{ item.name }}</div>
          <div class="cinimaAddress">{{ item.address }}</div>
          <!-- <div class="tags">改签 小吃</div> -->
        </div>

        <div class="right">
          <div class="price">¥{{ item.lowPrice / 100 }}起</div>
          <div class="distance">2.5km</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { getCityList } from "@/servies/modules/cinima_list"
import { ref } from "vue"

//当前城市数据
const nowCity = ref({})
if (localStorage.nowCity) {
  nowCity.value = JSON.parse(localStorage.nowCity)
}
const cityId = nowCity.value.cityId

//影院数据
const cinimaList = ref([])
getCityList(cityId).then(res => {
  cinimaList.value = res.data.cinemas
})
</script>

<style lang="scss" scoped>
.cinima-list {
  margin: 15px 0;
  .content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .left {
      width: 285px;
      margin-left: 15px;
      .cinimaName {
        font-size: 14px;
        font-weight: 500;
      }
      .cinimaAddress {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
      }
    }
    .right {
      margin-right: 15px;
      .price {
        color: var(--main-color);
      }
    }
  }
}
</style>
