<template>
  <!-- <Panel> -->
  <swiper :options="options">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <section :class="$style.list">
        <div :class="$style.item" v-for="item in page" :key="item.id">
          <div class="iconImg">
            <img :src="item.imgUrl" alt="" />
          </div>
          <p>{{ item.desc }}</p>
        </div>
      </section>
    </swiper-slide>
  </swiper>
  <!-- </Panel> -->
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import Slider from '../core/slider.vue'
// import Panel from '../core/panel.vue'
export default {
  components: {
    Swiper,
    SwiperSlide
    // Panel
    // Slider
  },
  data () {
    return {
      iconList: [],
      options: {
        autoplay: false
      }
    }
  },
  methods: {
    async getHomeIcons () {
      const { data: res } = await this.$http.get('/mock/index.json')
      if (res.ret && res.data) {
        this.iconList = res.data.iconList
      }
    }
  },
  mounted () {
    this.getHomeIcons()
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="scss" module>
@import '@/assets/css/element.scss';
@import '@/assets/css/varibles.scss';
.list {
  // @include list(row);
  width: 100%;
  height: 0;
  background: #fff;
  padding-bottom: 50%;
  overflow: hidden;
  .item {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    text-align: center;
    .iconImg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 44px;
      img {
        display: block;
        margin: 0 block;
        height: 100%;
      }
    }
    p {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: $darkTextColor;
    }
  }
}
</style>
