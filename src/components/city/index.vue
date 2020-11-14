<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :cities="cities" :hot="hotCities" :letter="letter"></CityList>
    <CityAlphabet @change="handleLetterChange" :cities="cities"></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from './Header'
import CitySearch from './Search'
import CityList from './List'
import CityAlphabet from './Alphabet'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    async getCityInfoA () {
      const { data: res } = await this.$http.get('/mock//city.json')
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfoA()
  }
}
</script>
<style></style>
