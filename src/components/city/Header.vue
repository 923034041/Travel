<template>
 <div :class="$style.header">
    {{this.city}}
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style>
  .header-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 64px;
      text-align: center;
      font-size: 40px !important;
      color: #fff;
  }
</style>

<style lang="scss" module>
@import '@/assets/css/varibles.scss';
 .header {
    position: relative;
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: 32px;
 }
</style>
