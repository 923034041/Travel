<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-chilren">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.item-title {
  line-height: 80px;
  font-size: 32px;
  padding: 2px;
}
.item-title-icon {
  position: relative;
  left: 6px;
  top: 6px;
  display: inline-block;
  width: 36px;
  height: 36px;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -40px
    no-repeat;
  margin-right: 10px;
  background-size: 40px 3px;
}
.item-chilren {
  padding: 20px;
}
</style>
