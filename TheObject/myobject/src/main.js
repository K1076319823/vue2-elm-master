
import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex' // 引入 vuex 以及其依赖 的 promise模块
import App from './App'
import router from './router'



// import Vue from 'vue'

// import Swiper from "swiper";
// import "swiper/dist/css/swiper.min.css";

Vue.use(Vuex);
Vue.config.productionTip = false;
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
