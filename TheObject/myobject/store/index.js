import vue from 'vue'
import vuex from 'vuex'
import state from './state'
vue.use(vuex)
let store = new vuex.Store(
  {
    state:state
  }
)
export default  store;
