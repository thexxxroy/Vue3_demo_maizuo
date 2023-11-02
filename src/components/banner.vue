<template>
  <div class="banner">
    <swiper
      :slides-per-view="5"
      :space-between="60"
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
    <!-- <img src="" alt=""> -->
    
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

const onSwiper = swiper => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log("slide change")
}

getCinemaFilmsArrangement(cinemaId).then(res => {
  getArrage.value = res.data.films
  console.log(getArrage.value)
})
</script>

<style lang="scss" scoped>
.banner {
  background-color: gray;
  padding: 15px 0;
  overflow: hidden;
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
</style>
