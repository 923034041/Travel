<template>
  <Panel title="热销推荐">
    <section :class="$style.list">
        <ul>
      <router-link
        tag="li"
        :class="$style.item"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img :src="item.imgUrl" />
        <div :class="$style.info">
          <p :class="$style.title">{{ item.title }}</p>
          <p :class="$style.desc">{{ item.desc }}</p>
          <button :class="$style.button">查看详情</button>
        </div>
      </router-link>
    </ul>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Panel
  },
  data () {
    return {
      lastCity: '',
      recommendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    async getHomeRecomend () {
      const { data: res } = await this.$http.get('/mock/index.json?city=' + this.city)
      if (res.ret && res.data) {
        this.recommendList = res.data.recommendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeRecomend()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeRecomend()
    }
  }
}
</script>
<style lang="scss" module>
@import '../../assets/css/element.scss';
.list {
  @include list;
.item {
    display: flex;
    overflow: hidden;
    height: 190px;
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
     .info {
      flex: 1;
      padding: 10px;
      min-width: 0;
     }
     .title {
        line-height: 54px;
        font-size: 32px;
        }
        .desc {
        line-height: 40px;
        color: #ccc;
        }
      .button {
        font-size: 30px;
        line-height: 30px;
        margin-top: 16px;
        background: #ff9300;
        padding: 2px;
        border-radius: 6px;
        color: #fff;
      }
   }
}
</style>
