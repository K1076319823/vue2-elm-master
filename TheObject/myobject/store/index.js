import vue from 'vue'
import vuex from 'vuex'
import state from './state'
vue.use(vuex)
let store = new vuex.Store(

  {state,

  mutations:{
  addToShopCar(state,goodsInfor){

    var flag = false // 假设没有在购物车中找到对应的商品
    state.car.some(item => {
      if(item.id == goodsInfor.id){
        item.count += parseInt(goodsInfor.count)
        flag = true
        return true
      }
    })

    if(!flag){
      state.car.push(goodsInfor)
    }
    //  当更新 car 之后, 把 car 存储到本地 localStorage 中
    localStorage.setItem('car', JSON.stringify(state.car))
    // 此时,初始化的 car 数组,已经不能是 空对象了
  }
},

getters: {
  // 相当于计算属性, 计算徽标数字显示数量和
  getAllCount(state){
    var c = 0;
    // var sum = 0;
    state.car.forEach(item => {
      c += item.count
    })
    return c
  },

  getAllPrice(state){
    var sum = 0;
    console.log(sum)
    state.car.forEach( item => {
      sum += item.count*item.price
      console.log(sum)
    } )
    if(sum >= 20){
      state.affair = true;
    }else{
      state.affair = false;
    }
    return sum
  }
}
}
)
export default  store;
