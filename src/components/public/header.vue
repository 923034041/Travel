<template lang="html">
  <header :class="$style.header">
    <div :class="$style.left">
      <em class="iconfont back-icon">&#xe624;</em>
    </div>
    <div :class="$style.input">内容</div>
    <div :class="$style.right">城市
      <em class="iconfont arrow-icon">&#xe64a;</em>
    </div>
  </header>
</template>

<script>
// import btn from '@/components/core/btn.vue'
export default {
  name: 'HomeHeader',
  components: {
    // btn
  }
}
</script>
<style lang="css">
  .back-icon {
    display: block;
      text-align: center;
      font-size: 40px;
    }
    .arrow-icon {
        display: inline-block;
        margin-left: -.4px;
        font-size: 24px;
    }
</style>

<style lang="scss" module>
@import '@/assets/css/varibles.scss';
.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  .left {
    float: left;
    width: 64px;
  }
  .input {
    flex: 1;
    height: 64px;
    line-height: 64px;
    margin-top: 12px;
    margin-left: 20px;
    padding-left: 20px;
    background: #fff;
    border-radius: 20px;
    color: #ccc;
  }
  .right {
    width: 124px;
    float: right;
    text-align: center;
  }
}
</style>
