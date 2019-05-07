
import Vue from 'vue'
import 'es6-promise/auto' 
import Vuex from 'vuex' // 引入 vuex 以及其依赖 的 promise模块
import App from './App'
import router from './router'
import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
