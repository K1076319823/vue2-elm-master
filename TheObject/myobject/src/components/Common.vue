<template>
    <div class="mall">
        <!-- 左边的选取区域 -->
        <div class="wrapper" ref='wrapper'>
            <ul class="cate-left">
                <li class="ellipsis" v-for="(list,index) in leftName" :key='index'>
                    <a :href="'#' + index" @click="changeMe(index)" >{{list}}</a>
                </li>
            </ul>
        </div>
        <!-- 右边的具体商品 -->
        <!-- <div class="shopLists"> -->
            <div class="wrapper2" ref='wrapper2'>
                <ul class="cate-right">
                    <li v-for="(list,index) in foods" :key="index" class="right-txts">
                        <a href="javascript:;" class="bigTitle clearfix">
                            <span class="title" :id="index">{{ list.name }}</span>
                            <span class="texts">{{ list.description }}</span>
                        </a>
                        <div >
                            <!-- 商品详情 -->
                            <div v-for="(lists,id) in list.foods" :key="id">

                                <div class="vessel clearfix" >
                                    <!-- <img :src="'//elm.cangdu.org/img/'+lists.image_path" alt=""> -->
                                    <img :src= "'//elm.cangdu.org/img/'+ lists.image_path" alt="请升级浏览器">
                                    <ul class="vesseler" >
                                      <router-link :to="{path:'/Proshow',query:{prosname:lists.name,prosimg:lists.image_path,prosM:lists.description,prosS:lists.month_sales,prosGd:lists.satisfy_rate,prosprice:lists.specfoods[0].price}}">
                                        <li class="newShop">新</li>
                                        <li class="smallTitle">{{ lists.name }}</li>
                                        <li class="referral">{{ lists.description }}</li>
                                        <li class="month">月售{{ lists.month_sales }}份</li>
                                      </router-link>
                                        <li class="good">好评率{{lists.satisfy_rate}}%</li>
                                        <li class="money">￥{{ lists.specfoods[0].price }}</li>
                                        <li class="money_txts">起</li>
                                        <!-- 插值表达式书写事件，传入后台请求的参数 -->
                                      <div @click="deproOne(lists.item_id)" class="redjian">-1</div>
                                        <div @click="bounceWeb(lists)">
                                            <!-- 点击按钮 将该商品添加到 Vuex 里面 -->
                                            <li class="choose" @click="addToShopCar(lists)" >
                                                {{checked(lists.specfoods)}}
                                            </li>
                                        </div>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </li>
                </ul>
            </div>
        <!-- </div> -->

        <!-- 购物车 -->
        <!-- :class="searchBarFixed == true ? 'isFixed' : '' " -->
        <div class="isFixed clearfix">
            <div class="logo"></div>
            <div class="logoPrice" id="badge">
                {{ $store.getters.getAllCount }}
            </div>
            <ul class="totalVessel">
                <li class="totalPrice">￥{{ $store.getters.getAllPrice }}.00</li>
                <li class="delivery">配送费￥5</li>
            </ul>
            <div class="price">还差 ￥20起送</div>
            <router-link :to="{path:'/Indent'}" class="freight" v-show="$store.state.affair">立即下单</router-link>
        </div>

        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <!-- 实现小球根据不同位置，都能实现加入购物车的平移效果 -->
            <div class="ball" v-if="ballFlage" ref="ball"></div>
        </transition>


        <!-- 点击添加弹出窗口 -->
        <div class="bounceWeb" v-show="bounce">
            <div class="popUp">
                <div class="popTitle clearfix">
                    <span>{{ shopName }}</span>
                    <img src="../../images/close.png" alt="请升级浏览器" @click="closeBounce">
                </div>

                <span class="size">规格</span>
                <div class="sizeSelect">
                    <div @click="clicker01Btn">{{ bounceValue01 }}</div>
                    <div @click="clicker02Btn">{{ bounceValue02 }}</div>
                </div>
                <div class="popBot">
                    <span class="sizeMoney" >￥{{ bouncePrice }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios);

    export default {
        name: 'Common',
        data () {
            return {
                leftName: [],
                foods:[],
                searchBarFixed: Boolean,
                ballFlage: false,
                // 定义数组存储购买的商品
                // shopDatas: [],
                bounce: false,
                // 弹出框里的三个数据
                bounceValue01: '',
                bounceValue02: '',
                bouncePrice: '',
                bouncePrice01: '',
                bouncePrice02: '',
                shopName: '',
                shopObj: {},
                // 设置a选择状态
                changeA: false,
                selectedCount: 1, // 每点击一次,数量增加一
                foodsPrice: Number, // 商品的 价格
                item_id: Number, //商品的 ID
                proname:'', //定义商品里的name

                // VueX 里面的 商品列表数组
                shopCar: [],
                xqPro:[]  //详情数组

            }
        },
        mounted(){
          setTimeout(()=>{
            // console.log(this.$store.state.shopid,777777)
            Vue.axios.get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=${this.$store.state.shopid}`).then((res) => {
              // console.log(res.data)
              for (const key in res.data) {
                this.leftName.push(res.data[key].name)
                // 循环遍历出 每一个左边栏对应的 右边栏列表块
                this.foods.push(res.data[key])
                // console.log(this.foods)

              }
            })
          },1000)

            // 设置窗口监听
            window.addEventListener('scroll', this.handleScroll)


            // 判断样式右下角 立即下单按钮

        },
        methods:{
            checked(lists){

                if(lists.length == 1){
                    return '+'
                }else{
                    return '选规格'
                }

            },
            moveBall(){
                this.ballFlage = !this.ballFlage;
            },
            // 小球动画
            beforeEnter(el){
                el.style.transform = "translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth

                // 小球动画的优化思路
                // 提供一个 domObject.getBoundingClientRect( ), 方法，来获取 一个dom节点相对于页面的
                // top, right, bottom, left 的值

                // 获取小球相对于页面中的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect()
                // 获取徽标在网页中过的位置
                const badgePosition =  document.getElementById('badge').getBoundingClientRect()
                //
                const xDist = badgePosition.left - ballPosition.left
                const yDist = badgePosition.top - ballPosition.top

                el.style.transform = `translate(${xDist}px, ${yDist}px)`
                el.style.transition = "all 1s cubic-bezier(0,.01,0,.85)"
                done()
            },
            afterEnter(el){
                this.ballFlage = !this.ballFlage
            },
            // 添加对象到购物车
            addToShopCar(commo){
               this.foodsPrice = commo.specfoods[0].price
               // console.log(this.foodsPrice)
               this.item_id = commo.specfoods[0].item_id
              this.proname =commo.specfoods[0].name
               // console.log(this.item_id)
                // 存储一个对象, 把商品对象数据存到 VueX 里
               let goodsInfor = {
                   id: this.item_id,
                 proname:this.proname,
                   count: this.selectedCount,
                   price: this.foodsPrice,
                   selected: true
               }
                // 调用 store 中的 mutations
                this.$store.commit('addToShopCar',goodsInfor)
                // 从 VueX 里面把 商品列表的数组取出来
                this.shopCar = this.$store.state.car
                // console.log(this.shopCar)


            },

            // 添加按钮被点击，弹出窗口
            bounceWeb(lists){
                // console.log(lists)
                this.shopObj = lists
                // console.log(this.shopObj)

                if(lists.specfoods.length > 1){
                    // 定义 拥有选规格外卖的数据变量
                    this.bounceValue01 = lists.specfoods[0].specs_name
                    this.bounceValue02 = lists.specfoods[1].specs_name
                    // 第一个按钮的 价格
                    this.bouncePrice01 = lists.specfoods[0].price
                    this.bouncePrice = lists.specfoods[0].price
                    // 第二个按钮的 价格
                    this.bouncePrice02 = lists.specfoods[1].price
                    this.bounce = !this.bounce
                    this.shopName = lists.name
                }else{
                    this.bounce = false

                }
            },
            clicker01Btn(){
              this.bouncePrice  = this.bouncePrice01
            },
            clicker02Btn(){
              this.bouncePrice = this.bouncePrice02
            },
            // 关闭弹窗
            closeBounce(){
                this.bounce = false;
            },
            changeMe(target){

                this.changeA = !this.changeA
            },
          deproOne(id){
             this.$store.commit('del',id)
            // console.log(id);
              }
        }
    }
</script>

<style scoped>
  .vesseler{
    position: relative;
  }
  .redjian{
    position: absolute;
    top:60%;
    left:38%;
    background-color: red;
    color:#fff;
    padding:0.1rem;
    width:1rem;
    height:1rem;
    border-radius:50% ;
    text-align: center;
  }
    .newShop{
        width: .8rem;
        height: .8rem;
        position: absolute;
        left: 7.4rem;
        top: .5rem;
        font-size: .16rem;
        background-color: darkorange;
        color: white;
        border-radius: 50%;
        text-align: center;
        border: 1px double gold;
    }
    /* 左侧 A标签的点击样式 */
    .colorful{
        color: rgb(49, 144, 232)
    }
    /* 购物车选择规格 */
    .bounceWeb{
        width: 100%;
        height: 10000%;
        position: absolute;
        left:0;
        top:0;
        bottom: 2.3rem;
        background-color: rgba(0,0,0, .42);
        border: .1px solid transparent;
    }
    .popUp{
        width: 76%;
        height: 200px;
        background-color: white;
        border-radius: 4px;
        opacity: 1;
        margin: 6.4rem auto 0;
        border: 1px solid rgb(240, 240, 240);
    }
    .popTitle{
        width: 100%;
        height: 20%;
        /* background-color: lightcoral; */
        font-size: 1rem;
        text-align: center;
    }
    .popTitle span{
        font-size: .8rem;
        margin-left: 1.4rem;
        line-height: 2.2rem;
        color: rgb(34, 34, 34);
    }
    .popTitle img{
        width: 1.4rem;
        height: 1.4rem;
        float: right;
        margin-top: .4rem;
        margin-right: .6rem;
    }
    .size{
        font-size: .8rem;
        color: #666;
        margin-left: .4rem;
        margin-top: 2rem;
    }
    .sizeSelect{
        width: 40%;
        height: 18%;
        margin-top: .4rem;
        /* background-color: lightcoral; */
    }
    .sizeSelect>div:first-child{
        width: 46%;
        height: 100%;
        float: left;
        margin-left: .4rem;
        /*  选择框被选中时显示的边框和文字颜色  (49, 153, 232) */
        border: 1px solid rgb(207, 207, 207);
        color: #666;
        border-radius: 4px;
        text-align: center;
        line-height: 1.6rem;
    }
    .sizeSelect>div:last-child{
        width: 36%;
        height: 100%;
        float: right;
        border: 1px solid rgb(207, 207, 207);
        color: #666;
        border-radius: 4px;
        text-align: center;
        line-height: 1.6rem;
    }
    .popBot{
        width: 100%;
        height: 30%;
        /* background-color: lightgreen; */
        position: relative;
        top: 1.2rem;
        line-height: 2rem;
    }
    .sizeMoney{
        font-size: 1rem;
        font-weight: 800;
        margin-left: .6rem;
        color: rgb(255, 130, 52);
        position: relative;
        top: .3rem;
    }
    .addToCar{
        width: 34%;
        height: 70%;
        background-color: rgb(49, 153, 232);
        color: white;
        padding: .4rem .6rem;
        margin-left: 3.2rem;
        border-radius: 4px;
    }

    body,html{
        width: 100%;
        height: 100%;
    }
    /* 购物车小球 */
    .ball{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: rgb(255, 97, 61);
        z-index: 100;
        position: relative;
        left: 12.7rem;
        top: 5.9rem;
    }
    /* 购物车 */
     .isFixed{
        position:fixed;
        background-color: rgb(61, 61, 63);
        width: 100%;
        height: 8%;
        bottom:0;
        z-index:1;
        border-top-left-radius:.2em;
        border-top-right-radius:.2em;
    }
    .isFixed a{
        float: right;
        width: 6rem;
        height: 2.2rem;
        color: white;
        display: inline-block;
        position: relative;
        bottom: 3.96rem;
        left: 6rem;
        background-color: rgb(86, 209, 108);
        /* border: 1px solid #10C2B0; */
        border-radius: .2rem;
        font-size: .7rem;
        font-weight: 800;
        line-height: 2.34rem;
        text-align: center;
        text-decoration: none;
        border-bottom: 20px solid rgb(86, 209, 108);
    }
    .logoPrice{
        width: 1rem;
        height: 1rem;
        background-color: rgb(255, 97, 61);
        position: relative;
        bottom: 4.1rem;
        left: 3.1rem;
        border-radius: 50%;
        text-align: center;
        color: white;
    }
    .price{
        float: right;
        width: 6rem;
        height: 3rem;
        color: white;
        display: inline-block;
        position: relative;
        bottom: 4rem;
        background-color: rgb(83, 83, 86);
        border-radius: .2rem;
        font-size: .7rem;
        font-weight: 800;
        line-height: 2.34rem;
        text-align: center;
    }

    .totalVessel{
        float: left;
        position: relative;
        bottom: 3.7rem;
        left: 4.4rem;
        color: white;
    }
    .choose{
        font-size: .7rem;
        position: relative;
        left: 5rem;
        bottom: 1rem;
        width: 3rem;
        height: 1rem;
        background-color: rgb(49, 144, 232);
        text-align: center;
        color: white;
        border-radius: .3rem;
    }
    .totalPrice{
        font-size: .8rem;
        line-height: 1rem;
    }
    .delivery{
        font-size: .4rem;
        font-weight: 400;
    }
    .logo{
        width: 2.6rem;
        height: 2.6rem;
        background-color: rgb(61, 61, 63);
        position: relative;
        left: 1rem;
        bottom: 1rem;
        border-radius: 50%;
        box-sizing: content-box;
        border: .2rem solid rgb(68, 68, 68);
        background: url('../../images/goShoping.png') no-repeat;
        background-position: center center;
        background-size: cover;
    }


    ul{
        list-style: none;
    }
    .cate-left{
        width: 4.4rem;
        height: 600px;
        overflow-x: hidden;
    }
    .cate-left>li{
        height: 10%;
    }
    .cate-right{
        width: 12.6rem;
        height: 600px;
        overflow-x: hidden;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .mall{
        width: 100%;
        height: 100%;
        /* overflow-x: hidden; */
        /* overflow-y: hidden; */
        position: relative;
    }
    .titler{
        width: 100%;
        height: 8%;
        background-color: white;
        border-bottom: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        font-size: .8rem;
        line-height: 2.3rem;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: 1;
    }

    /* 左边选区区域 */
    .wrapper{
        width: 26%;
        height: 615.41px;
        position: absolute;
        overflow-x:hidden;
    }
    /* 右边的商品详情 */
    .wrapper2{
        width: 74%;
        height: 615.41px;
        position: absolute;
        overflow-x:hidden;
        left: 4.1rem;
        background-color: rgb(245, 245, 245);
    }

    .vessel{
        width: 100%;
        background-color: white;
        border-bottom: 1px solid lightgray;
    }
    .vessel img{
        width: 20%;
        float: left;
        vertical-align: top;
        box-sizing: border-box;
        padding-left: .3rem;
        padding-top: .3rem;
    }
    .vesseler{
        width: 80%;
        float: right;
        background-color:white;
        box-sizing: border-box;
        padding: .2rem;
        position: relative;
        border-bottom: .2px solid lightgray;
    }
    .smallTitle{
        font-size: .76rem;
        font-weight: 600;
        overflow: hidden;
    }
    .referral{
        font-size: .6rem;
        color: #666;
    }
    .good{
        position: relative;
        bottom: .62rem;
        left: 4rem;
        font-weight: 400;
        color: black;
    }
    .month{
        font-weight: 400;
        color: black;
        position: relative;
        top: .4rem;
    }
    .money{
        font-size: .7rem;
        font-weight: 700;
        color: darkorange;
    }
    .money_txts{
        position: absolute;
        bottom: 1.28rem;
        left: 1.8rem;
        color: rgb(107, 107, 107);
    }
    .right-txts>a{
        color: rgb(102, 102, 102);
        width: 100%;
        background-color: rgb(245, 245, 245);
    }
    .title{
        width: 44%;
        background-color: rgb(245, 245, 245);
        font-size: 1rem;
        font-weight: 600;
        float: left;
        padding: .4rem 0;
        box-sizing: border-box;
        padding-left: .4rem;
        padding-top: .6rem;
    }
    .texts{
        width: 56%;
        background-color: rgb(245, 245, 245);
        float: left;
        padding-top: .54rem;
        box-sizing: border-box;
        padding-bottom: .4rem;
        padding-top: .94rem;
    }
    .cate-left>li{
        background-color: #F5F5F5;
    }
    .ellipsis{
        width: 100%;
        font-size: .8rem;
        font-weight: 600;
        line-height: 3.1rem;
        border-bottom: 1px solid lightgray;
        box-sizing: border-box;
        padding-left: .3rem;
        /* text-align: center; */
        color: rgb(121, 121, 121);
        text-shadow: 0 .1px rgb(233, 233, 233),
                      .1px 0 rgb(233, 233, 233),
                      -.1px 0 rgb(233, 233, 233),
                      0 -.1px rgb(233, 233, 233);
        border-left: 3px solid rgb(49, 144, 232);
    }
    .ellipsis a{
        text-decoration: none;
        color: rgb(121, 121, 121);
    }
</style>
