<template>
  <div>
    <router-link tag="div" to="/" class="headerAbs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="headerFixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/varibles.scss';

.headerAbs {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 40px;
  text-align: center;
  background: rgba(0, 0, 0, .8);
  .header-abs-back {
    color: #fff;
    font-size: 40px;
  }
}
.headerFixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 32px;
  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    text-align: center;
    font-size: 40px;
    color: #fff;
  }
}
</style>
