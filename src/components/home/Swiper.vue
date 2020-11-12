<template>
  <Slider :items="items" :cname="$style.wrapper"></Slider>
</template>

<script>
import Slider from '../core/slider.vue'
export default {
  components: {
    Slider
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    async getHomeInfo () {
      const { data: res } = await this.$http.get('/mock/index.json')
      if (res.ret && res.data) {
        this.items = res.data.swiperList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="scss" module>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  img {
    width: 100%;
  }
}
</style>
