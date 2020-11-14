<template>
  <ul :class="$style.list">
    <li
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :class="$style.item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 178
          const index = Math.floor((touchY - this.startY) / 40)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>
<style lang="scss" module>
@import '@/assets/css/varibles.scss';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 158px;
  right: 0;
  bottom: 0;
  width: 40px;
  .item {
    line-height: 40px;
    text-align: center;
    color: $bgColor;
  }
}
</style>
