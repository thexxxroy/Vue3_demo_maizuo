<template>
  <div class="banner">
    <swiper
      :slides-per-view="5"
      :space-between="70"
      :centered-slides="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <template v-for="(item, index) in getArrage" :key="index">
        <swiper-slide>
          <img :src="item.poster" alt="" />
        </swiper-slide>
      </template>
    </swiper>
    <div class="icon">
      <img src="@/assets/img/bottomicon.png" alt="" />
      <van-icon name="arrow-up" />
    </div>
  </div>
</template>

<script setup>
import "swiper/css"
import "swiper/css/bundle"
import { Swiper, SwiperSlide } from "swiper/vue"
import { ref } from "vue"
import { useRoute } from "vue-router"
import { getCinemaFilmsArrangement } from "@/servies/modules/cinema"

const getArrage = ref({})
const router = useRoute()
const cinemaId = router.query.cinemaId
const index = ref(0)

const onSwiper = swiper => {
  console.log(swiper)
}
const onSlideChange = i => {
  // console.log('onSlideChange',ee.activeIndex)
  index.value = i.activeIndex
}

getCinemaFilmsArrangement(cinemaId).then(res => {
  getArrage.value = res.data.films
  console.log(getArrage.value)
})
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  padding: 15px 0;
  overflow: hidden;
 
  .icon {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-75%);
    //left: 50% 将元素的左边缘移动到容器的中心， transform: translate(-50%) 通过向左平移50%宽度，将元素的中心与容器的中心对齐，从而实现了水平居中
    width: 20px;
    height: 10px;
  }

  .swiper-slide {
    img {
      width: 90px;
      height: 130px;
    }
    display: flex;
    justify-content: center;
    transition: 300ms;
    transform: scale(0.75);
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }
}
</style>
