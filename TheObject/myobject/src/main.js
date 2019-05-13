
import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex' // 引入 vuex 以及其依赖 的 promise模块
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Vuex);
// import Vuex from 'Vuex'

import Classify from './components/Classify.vue';
Vue.use(ElementUI);

Vue.use(Vuex);

Vue.config.productionTip = false;
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);


// var store = new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   getters: {

//   }
// }) // 创建 Vuex 实例

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Classify),
  // store,

  components: { App },

  template: '<App/>'
})

