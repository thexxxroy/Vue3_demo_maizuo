<template>
  <div class="cinima-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <template v-for="item in cinimaList">
        <div class="content" @click="cinimaItemClick">
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
    </van-list>
  </div>
</template>

<script setup>
import { getCityList } from "@/servies/modules/cinima_list"
import { ref } from "vue"
import { useRouter } from "vue-router"

const cinimaList = ref([])
const totalPages = ref()

//当前城市数据
const nowCity = ref({})
if (localStorage.nowCity) {
  nowCity.value = JSON.parse(localStorage.nowCity)
}
const cityId = nowCity.value.cityId
const pageSize = ref(10)
//下拉新增
const loading = ref(false)
const finished = ref(false)
const onLoad = () => {
  // 异步更新数据
  pageSize.value += 10
  //影院数据
  getCityList(cityId, pageSize.value).then(res => {
    cinimaList.value = res.data.cinemas
    totalPages.value = res.data.total
    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (pageSize.value >= totalPages.value) {
      finished.value = true
    }
  })
}
//影院详情跳转
const router = useRouter()
const cinimaItemClick = ()=>{
  router.push({
    path: "/cinimaDetail"
  })
}
</script>

<style lang="scss" scoped>
.cinima-list {
  padding: 11px 12px;
  background-color:var(--background-color);
  .content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 6px;
    background-color: #fff;
    .left {
      width: 275px;
      .cinimaName {
        margin-bottom: 6px;
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
      font-size: 12px;

      .price {
        margin-bottom: 6px;
        color: var(--main-color);
      }
    }
  }
}
</style>
