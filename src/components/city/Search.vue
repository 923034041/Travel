<template>
  <section>
    <div :class="$style.search">
      <input
        v-model="keyword"
        :class="$style.input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <!-- 搜索区域 -->
    <div :class="$style.content" ref="search" v-show="keyword">
      <ul>
        <li
          :class="$style.item"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li :class="$style.item" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="scss" module>
@import '@/assets/css/varibles.scss';
.search {
  height: 72px;
  padding: 10px;
  background: $bgColor;
  .input {
    box-sizing: border-box;
    font-size: 40px;
    width: 100%;
    height: 62px;
    padding: 10px;
    line-height: 62px;
    text-align: center;
    border-radius: 6px;
    color: #666;
  }
}
.content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 158px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .item {
    line-height: 62px;
    padding-left: 20px;
    background: #fff;
    color: #666;
  }
}
</style>
