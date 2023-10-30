<template>
  <div class="cinema">
    <nav-bar title="影院"></nav-bar>
    <filtrate></filtrate>

    <!-- 影院列表 -->
    <cinema-list></cinema-list>
    <tabbar></tabbar>
  </div>
</template>

<script setup>
import navBar from "@/components/nav-bar.vue"
import filtrate from "@/components/filtrate.vue"
import cinemaList from "@/components/cinema-list.vue"
</script>

<style lang="scss" scoped>
.cinema {
  padding-bottom: 40px;
}
</style>
