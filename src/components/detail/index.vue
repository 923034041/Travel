<template>
  <div>
      <DetailBanner></DetailBanner>
      <DetailHeader></DetailHeader>
       <div class="content">
      <DetailList :list="list"></DetailList>
       </div>
  </div>
</template>

<script>
import DetailBanner from './Banner.vue'
import DetailHeader from './Header.vue'
import DetailList from './List.vue'
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getDetailList () {
      const { data: res } = await this.$http.get('/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
      if (res.ret && res.data) {
        this.list = res.data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailList()
  }
}
</script>
<style>
 .content {
    height: 5000px;
 }
</style>
