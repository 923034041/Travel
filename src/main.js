import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.scss'
// 导入vuex
import store from './store'
// 导入字体图标
import './assets/iconfont.css'
import axios from 'axios'
Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
