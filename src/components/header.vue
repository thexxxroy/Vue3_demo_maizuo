<template>
  <div class="herder">
    <div class="icon">
      <van-icon name="arrow-left" size="25" @click="onClickLeft" />
    </div>
    电影
  </div>
</template>

<script setup>
//返回首页
const onClickLeft = () => history.back()
</script>

<style lang="scss" scoped>
.herder {
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  font-size: 18px;
  color: #fff;
  background-color: var(--main-color);

  .icon {
    position: absolute;
    left: 0;
    padding: 5px;
  }
}
</style>
