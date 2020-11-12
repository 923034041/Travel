<template>
  <Panel title="周末去哪儿">
      <ul :class="$style.content">
        <li v-for="item of weekendList" :key="item.id">
          <div :class="$style.wrapper">
            <img :class="$style.img" :src="item.imgUrl" />
          </div>
          <div :class="$style.info">
            <p :class="$style.title">{{ item.title }}</p>
            <p :class="$style.desc">{{ item.desc }}</p>
          </div>
        </li>
      </ul>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  },
  data () {
    return {
      weekendList: []
    }
  },
  methods: {
    async getHomeRecomend () {
      const { data: res } = await this.$http.get('/mock/index.json')
      if (res.ret && res.data) {
        this.weekendList = res.data.weekendList
        console.log(this.weekendList)
      }
    }
  },
  mounted () {
    this.getHomeRecomend()
  }
}
</script>
<style lang="scss" module>
.content {
    .wrapper {
    margin-top: 50px;
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    }
    .img {
      width: 100%;
    }
  .info {
    padding: .10px;
    .title {
      line-height: 54px;
      font-size: 32px;
      }
    .desc {
      line-height: 40px;
      color: #ccc;
    }
  }
}
</style>
