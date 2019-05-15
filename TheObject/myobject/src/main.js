import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex' // 引入 vuex 以及其依赖 的 promise模块
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Classify from './components/Classify.vue';
import 'animate.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.use(Vuex);
axios.defaults.withCredentials = true  //验证码验证
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,

  components: { App },

  template: '<App/>'
})

