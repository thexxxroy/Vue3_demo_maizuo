<template>
  <div class="cinima">
    <nav-bar title="影院"></nav-bar>
    <filtrate></filtrate>

    <!-- 影院列表 -->
    <cinima-list></cinima-list>
    <tabbar></tabbar>
  </div>
</template>

<script setup>
import navBar from "@/components/nav-bar.vue"
import filtrate from "@/components/filtrate.vue"
import cinimaList from "@/components/cinima.list.vue"
</script>

<style lang="scss" scoped>
.cinima {
  padding-bottom: 50px;
}
</style>
