<template>
  <div class="slot">
    <div class="header">
      <div class="title">{{title}}</div>
      <div class="more">{{ more }}<van-icon name="arrow-down" /></div>
    </div>
    <div class="content">
      <slot>
        <p>
          我是默认slot内容
        </p>
      </slot>
    </div>
  </div>
</template>

<script setup>

defineProps({
  title:{
    type:String,
    default:"默认标题"
  },
  more:{
    type:String,
    default:"更多"
  }
})
</script>

<style lang="scss" scoped>
.slot {
  padding: 10px;

  .header {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 16px;
    }
    .more {
      color: gray;
    }
  }
  .content{
    margin-top: 5px;
  }
}
</style>
