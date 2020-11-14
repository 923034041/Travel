<template>
  <section ref="wrapper" :class="$style.list">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div :class="[$style.title, $style.topbottom]">当前城市</div>
        <div :class="$style.btnlist">
          <div :class="$style.wrapper">
            <div :class="$style.button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div :class="[$style.title, $style.topbottom]">热门城市</div>
        <div :class="$style.btnlist">
          <div :class="$style.wrapper" v-for="item of hot" :key="item.id"  @click="handleCityClick(item.name)">
            <div :class="$style.button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 城市列表 -->
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div :class="[$style.title, $style.topbottom]">{{ key }}</div>
        <div :class="$style.itemlist">
          <div
            v-for="innerItem of item"
            :key="innerItem.id"
            :class="[$style.item, $style.borderbottom]" @click="handleCityClick(innerItem.name)">
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations, mapState } from 'vuex'
export default {
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      console.log(this.letter)
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="scss" module>
.topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 158px;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 54px;
    background: #eee;
    padding-left: 20px;
    color: #666;
    font-size: 26px;
  }
  .btnlist {
    overflow: hidden;
    padding: 10px 60px 10px 10px;
    .wrapper {
      float: left;
      width: 33.33%;
    }
    .button {
      margin: 10px;
      padding: 10px 0;
      text-align: center;
      border: 2px solid #ccc;
      border-radius: 6px;
    }
  }
  .itemlist {
    .item {
      line-height: 76px;
      padding-left: 20px;
    }
    .borderbottom {
      &:before {
        border-color: #ccc;
      }
    }
  }
}
</style>
