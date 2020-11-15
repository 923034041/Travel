<template>
  <div>
    <section :class="$style.banner" @click="handleBannerClick">
      <img :class="$style.img" :src="bannerImg" />
      <div :class="$style.info">
        <div :class="$style.tittle">
          {{ this.sightName }}
        </div>
        <div :class="$style.number">
          <span class="iconfont icon">&#xe692;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </section>
    <FadeAnimation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </FadeAnimation>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/fade/FadeAnimation'
export default {
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      bannerImgs: [],
      showGallary: false
    }
  },
  methods: {
    async getDetailInfo () {
      const { data: res } = await this.$http.get('/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
      if (res.ret && res.data) {
        this.sightName = res.data.sightName
        this.bannerImg = res.data.bannerImg
        this.bannerImgs = res.data.gallaryImgs
      }
    },
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style scoped>
.icon {
  font-size: 24px;
}
</style>
<style lang="scss" module>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .img {
    width: 100%;
  }
  .info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 60px;
    color: #fff;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .tittle {
      flex: 1;
      font-size: 32px;
      padding: 20px;
    }
    .number {
      height: 32px;
      line-height: 32px;
      margin-top: 14px;
      padding: 40px;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.8);
      font-size: 24px;
    }
  }
}
</style>
