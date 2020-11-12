<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <HomeIcons></HomeIcons>
    <HomeRecommend></HomeRecommend>
    <homeWeekend></homeWeekend>
  </div>
</template>

<script>
import HomeHeader from '../public/header'
import HomeSwiper from './Swiper'
import HomeIcons from './/Icons'
import HomeRecommend from './Recommend'
import HomeWeekend from './Weekend'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style></style>
