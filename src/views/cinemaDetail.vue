<template>
  <div class="cinemaDetail">
    <div class="herder">
      <div class="icon">
        <van-icon name="arrow-left" size="25" @click="onClickLeft" />
      </div>
    </div>

    <div class="filmDetail">
      <div class="content">
        <div class="title">{{ cinemaInfo.name }}</div>
        <div class="tags">
          <template v-for="tag in cinemaInfo.services">
            <van-tag plain type="primary" color="var(--main-color)">
              <!-- {{tag}} -->停车
            </van-tag>
          </template>
        </div>
        <div class="address">
          <div class="mapIcon">
            <van-icon name="location-o" size="22" color="gray" />
          </div>
          <div class="location">
            {{ cinemaInfo.address }}
          </div>
          <div class="phoneIcon">
            <van-icon class="icon" name="phone-o" size="22" />
          </div>
        </div>
      </div>
    </div>

    <div class="arr"></div>
  </div>
</template>

<script setup>
import {
  getCinemaDetail,
  getCinemaFilmsArrangement,
} from "@/servies/modules/cinema"
import { ref } from "vue"
import { useRoute } from "vue-router"

const router = useRoute()
const cinemaId = router.query.cinemaId
const cinemaInfo = ref({})
const cinemaFilmsArrangement = ref({})

getCinemaDetail(cinemaId).then(res => {
  cinemaInfo.value = res.data.cinema
  console.log(cinemaInfo.value)
})

getCinemaFilmsArrangement(cinemaId).then(res => {
  cinemaFilmsArrangement.value = res.data.films
  console.log(cinemaFilmsArrangement.value)
})

// //返回首页
const onClickLeft = () => history.back()
</script>

<style lang="scss" scoped>
.cinemaDetail {
  padding-top: 12px;
  .filmDetail {
    .content {
      .title {
        text-align: center;
        margin: 12px 0;
      }
      .tags {
        text-align: center;
        margin: 12px 0;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--border-color);
      }
      .address {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // height: 44px;
        .mapIcon {
          margin-left: 10px;
        }
        .location {
          width: 275px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
        }
        .phoneIcon {
          width: 42px;
          text-align: center;
          padding: 0 10px;
          height: 20px;
          border-left: 1px solid var(--border-color);
        }
      }
    }
  }
}
</style>
