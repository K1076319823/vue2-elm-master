<template>
  <div>
    <div class="classify">
        <!--<Load></Load>-->
        <div class="vessel">
            <!-- 顶端跳转部分 -->
            <div class="ifyTop">
                <router-link :to="{path:'/index'}" class="goBack"></router-link>
                <p> {{ this.txt }} </p>
            </div>
            <div id="ifyCenter">
                <el-menu
                class="el-menu-demo one"
                mode="horizontal"
                background-color="white"
                text-color="#666"
                active-text-color="rgb(49,144,232)" >
                    <el-submenu index="1" class="container">
                        <template slot="title">分类</template>
                        <el-submenu index="2-1"  v-for="(el,index) in leftOne" :key="index" >
                            <template slot="title" class="leftPull">
                                <img :src="imgs[index]" alt="请升级浏览器" class="images">
                                <a href="javascript:;" @click="clickSub(el)">{{ el.name }}</a>
                                <a href="javascript:;" id="leftPullA">{{ el.count }}</a>
                            </template>
                            <el-menu-item  v-for="(ele,indexs) in leftTwo" :key="indexs" class="poser">
                                <div>{{ ele.name }}</div>
                            </el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>

                 <el-menu
                class="el-menu-demo eler"
                mode="vertical"
                background-color="white"
                text-color="#666"
                active-text-color="rgb(49, 144, 232)">
                    <el-submenu index="2" class="center">

                        <template slot="title"><div @click="Xu">排序</div></template>
                      <div v-show='flag'>
                        <p class="centerP " :class="{select:selectName==='4'?true:false}" @click="getp('4')" >
                          <img src="../../images/sort.png" alt="请升级浏览器">
                          <span>智能排序</span>
                          <img  class="tu" src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP" :class="{select:selectName==='5'?true:false}" @click="getp('5')" >
                          <img src="../../images/place.png" alt="请升级浏览器">
                          <span>距离最近</span>
                          <img  class="tu" src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP" :class="{select:selectName==='6'?true:false}" @click="getp('6')">
                          <img src="../../images/flame.png" alt="请升级浏览器">
                          <span>销量最高</span>
                          <img  class="tu" src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP" :class="{select:selectName==='1'?true:false}" @click="getp('1')">
                          <img src="../../images/money.png" alt="请升级浏览器">
                          <span>起送价最低</span>
                          <img  class="tu" src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP" :class="{select:selectName==='2'?true:false}" @click="getp('2')">
                          <img src="../../images/clock.png" alt="请升级浏览器">
                          <span>配送最快</span>
                          <img class="tu" src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP" :class="{select:selectName==='3'?true:false}" @click="getp('3')">
                          <img src="../../images/star.png" alt="请升级浏览器">
                          <span>评分最高</span>
                          <img  class="tu" src="../../images/check.png" alt="请升级浏览器">
                        </p>
                      </div>
                    </el-submenu>
                </el-menu>

                <el-menu
                class="el-menu-demo  elers"
                mode="vertical"
                background-color="white"
                text-color="#666"
                active-text-color="rgb(49, 144, 232)">
                    <el-submenu index="3" class="right">
                        <template slot="title">筛选</template>
                        <div class="delivery">
                            <p class="delTxtOne">配送方式</p>
                            <!-- 蜂鸟专送 -->
                            <div class="mango">
                                <img src="../../images/mongos.png" alt="请升级">
                                <span v-text="mangoTxt"></span>
                            </div>
                            <p class="delTxtTwo">商家属性（可以多选）</p>
                            <div>
                                <div class="shopNature" >
                                    <!-- key 这个就是那个对象 key.isClick就是我要添加的属性 然后我把这个key对象传给函数   -->
                                    <p v-for="key in rightTwo" :key="key.id"
                                      :class="{ color:key.isClick}" @click="changeColor(key)">
                                        <span>{{ key.icon_name }}</span>
                                        {{ key.name }}
                                    </p>
                                </div>
                            </div>
                            <form action="" class="former clearfix">
                                <input type="submit" value="清空" title="清空" class="empty" @click="empty">
                                <input type="submit" :value="'确定'+clickTxt" title="提交" class="sub">
                            </form>
                        </div>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
    </div>
          <!--从卖家页面布局的-->
          <div class="mar clearfix">
            <div class = "dingpai"  v-for="it in proArr" @click="Scity(it.id,it. rating_count,it.rating)">
              <router-link :to="{path:'/CAndESocket'}" >
              <div class="left">
                <div class="ctu">
                  <img :src="'//elm.cangdu.org/img/'+ it.image_path " alt="">
                </div>
              </div>
              <div class="right">
                <div class="one clearfix">
                  <div class="zuo"><span class="pingpai">品牌</span><b class="name">{{it.name}}</b></div>
                  <div class="you">
                    <p>保</p>
                    <p>{{it.supports[1].icon_name}}</p>
                    <p>票</p>
                  </div>
                </div>
                <div class="two clearfix">
                  <div class="zuo"><span class="pfen">{{it.rating}}</span><span class="xiaoliang">月销{{it.recent_order_num}}单</span></div>
                  <div class="you"> <p class="da">{{it.supports[1].name}}</p><p  class="fengniao">{{it.delivery_mode.text}}</p></div>
                </div>
                <div class="there clearfix">
                  <div class="zuo"> <span> ￥20元起送</span>/<span>{{it.piecewise_agent_fee.tips}}</span></div>
                  <div class="you"> <span>{{it.distance}}</span> <span class="tim">{{it.order_lead_time}}</span></div>
                </div>
              </div>
              </router-link>
            </div>
          </div>
      {{cd}}
  </div>
</template>

<script>

    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios);

    import Load from './Loading.vue'

    export default {
        name: 'Classify',
        render: h => h(Classify),
        data() {
            return {
            txt: '快餐便当' ,
            // Left  一级数组，
            leftOne: [],
            // 循环图片 拼接路径的 src值
            imgs:[require("../../images/1.png"),
                  require("../../images/2.png"),
                  require("../../images/3.png"),
                  require("../../images/4.png"),
                  require("../../images/5.png"),
                  require("../../images/6.png"),
                  require("../../images/7.png"),
                  require("../../images/8.png"),
                  require("../../images/9.png")
                  ],
            // 第三个下拉框的 数据
            mangoTxt: '',
            leftOne: [],
            leftTwo: [],
            rightTwo: [],
            data: Number,
            // data: [],

            // 按钮计数
            clickTxt:'',
            clickBtn: 0,
            blon: false,
            indexNum:0 , //默认给0

              selectName:'4', //默认排序序号
              flag:true,  //排序默认为真
              proArr: [],
              mas:true,//显示隐藏
              btnText: this.$store.state.Dclass,
              fhao1:false,  //分类显示隐藏
              premium: true,
              idArr: [],
            }
        },
        mounted(){
            //  请求分类
            Vue.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category')

                .then((res)=>{
                for (const key in res.data) {
                    this.leftOne.push(res.data[key])
                }
                }).catch(function(error){
                    console.log(error)
            })

            // 请求第三 下拉框
            Vue.axios.get('https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes')

            .then((res)=>{
                this.mangoTxt = res.data[0].text
                this.mangoUrl = res.config.url
            })

            Vue.axios.get('https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes')

            .then((res)=>{
                for (const keys in res.data) {
                    this.rightTwo.push(res.data[keys])
                    console.log(this.rightTwo)
                    this.data = (res.data[keys].id)
                    console.log(this.data)
                }
            })


        },
        methods: {
          Scity(id,z,f){
            console.log(id);
            this.$store.state.shopid=id;
            this.$store.state.zan=z;
            this.$store.state.prosfen=f;
            console.log(this.$store.state.shopid,this.$store.state.zan);
          },
            clickSub(target){
                this.leftTwo = target.sub_categories.slice(1)
                console.log(this.leftTwo)
            },
            clickFor(target){

                console.log(target.id)
                target.onclick = function(){
                    target.bgc = this.blon
                }
                if(this.clickBtn <= 5){
                   this.clickBtn += 1;
                   this.clickTxt = '(' + this.clickBtn + ')'
                   this.blon = true
                }else if(this.clickBtn === 6){
                    this.clickBtn = null
                    this.clickFor = null
                }
            },
            empty(){
                this.blon = false
                this.clickTxt = ''
                this.clickBtn = 0
            },
            changeColor(key,index){
                // 然后判断 点击时候判断 有就加 但是值是false  没有就加 值是true 懂了吗 我一点 就会添加这个属性 没有 值是true  有 值是false
                 if(key.isClick){
                    Vue.set(key,"isClick",false);
                 }else{
                    Vue.set(key,"isClick",true);
                 }
            },
          getp(xh) {
            this.selectName = xh;
            this.flag = false;

            // this.$store.state.xunhao=this.selectName
            // console.log( this.$store.state.xunhao, 100)
          },
          Xu(){
            this.flag = true;

          },
          // fenglei() {
          //   this.mas = !this.mas
          //   if (this.mas == true) {
          //     this.btnText = this.$store.state.Dclass
          //     this.fhao1=!this.fhao1
          //
          //   } else if (this.mas == false) {
          //     this.btnText = "分类"
          //     this.fhao1=!this.fhao1
          //   }
          // }
        },
        components: {
            Load
        },
      computed:{
        cd(){
          //请求数据
          let jin=this.$store.state.latitude
          let wei=this.$store.state.longitude
          let ms =parseInt(this.selectName)
          console.log(jin,wei,ms,"111aaaaaa")
          Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${jin}&longitude=${wei}&order_by=${ms}`).then((res) => {
            console.log(res.data,ms,444);
            this.proArr = res.data;
            console.log(this.proArr,'qqqqqq');
          }).catch((error) => {
            console.log('请求错误', error);
          })

          return

        }
      },
    }
</script>

<style scoped>
/* 想办法让这个选择器权重最高 可以了 然后看我怎么写*/
   .shopNature .color{
        color: #fff;
     background-color: #3190e8;
    }
    .shopNature{
        text-align: left;
        width: 100%;
        height: 3.2rem;
        background-color: rgb(255, 255, 255);
        line-height: .8rem;
        float: left;
    }
    .shopNature p{
        width: 27%;
        height: 40%;
        /* background-color: rgb(230, 173, 221); */
        font-size: .58rem;
        color: #666;
        float: left;
        margin-left: .9rem;
        position: relative;
        margin-bottom: 0;
        margin-top: .18rem;
        border: 1px solid lightgrey;
        border-radius: 4px;
    }
    .shopNature span{
        width: 1.2rem;
        height: 1.2rem;
        /* background-color: lightcoral; */
        padding-top: .2rem;
        padding-left: .2rem;
        border-radius: 2px;
        display: inline-block;
        z-index: 1;
        border: 1px solid lightgray;
    }
    img{
        vertical-align: top;
    }
    .mango img{
        width: 1.2rem;
        height: 1.1rem;
        position: relative;
    }
    .mango{
        line-height: 1.2rem;
        text-align: left;
    }
    .centerP{
        width: 300%;
        height: 2.4rem;
        background-color: white;
        margin: 0;
        position: relative;
        right: 100%;
        font-size: .58rem;
        color: #666;
        line-height: 2.4rem;
    }
    .centerP span{
        display: inline-block;
        width: 12rem;
        text-align: left;
    }
    .centerP img{
        width: .8rem;
        height: .8rem;
        margin-top: .78rem;
        margin-right: 0rem;
    }
    #leftPullA{
        background-color: rgb(218, 216, 216);
        padding: .4px 4px;
        border-radius: 4px;
    }

    .rank{
        width: 270%;
        position: relative;
        right: 5.4rem;

    }
    .empty{

        float: left;
        position: relative;
        left: 1.2rem;
        bottom: 2.9rem;
        width: 44%;
        height: 74%;
        background-color: white;
        border-radius: 4px;
        font-size: .8rem;
        color: rgb(43, 43, 43);
        text-shadow: .5px .5px .5px rgb(190, 190, 190);
        font-weight: 300;
        outline: none;
    }
    .sub{
        float: right;
        position: relative;
        right: .4rem;
        bottom: 2.9rem;
        width: 44%;
        height: 74%;
        background-color: rgb(86, 209, 118);
        border-radius: 4px;
        font-size: .8rem;
        color: white;
        text-shadow: .5px .5px .5px rgb(190, 190, 190);
        font-weight: 300;
        outline: none;
    }
    .former{
        width: 100%;
        height: 24.6%;
        background-color: rgb(241, 241, 241);
        position: relative;
        top: 3.2rem;
    }
    .former input{
        border: 0;
    }
    .mango{
        width: 26%;
        height: 12%;
        background-color: white;
        margin-left: 1.4rem;
        margin-bottom: .6rem;
        font-size: .4rem;
        border: 1px solid rgb(223, 223, 223);
        border-radius: 2px;
    }
    .delTxtOne{
        font-size: .5rem;
        padding-top: .6rem;
        position: relative;
        right: 6rem;
        color: rgb(43, 43, 43);
        text-shadow: .3px .3px .3px rgb(190, 190, 190);
    }
    .delTxtTwo{
        font-size: .5rem;
        position: relative;
        right: 4.6rem;
        color: rgb(43, 43, 43);
        text-shadow: .3px .3px .3px rgb(190, 190, 190);
    }
    .delivery{
        width: 16.5rem;
        height: 10.4rem;
        position: relative;
        bottom: .48rem;
        right: 11.6rem;
        line-height: 1.2rem;
      /*  代替了高度作为修复bug的小手法*/
      background: white;
    }
    .images{
        width: 20px;
        height: 20px;
        float: left;
        position: relative;
        top: .4rem;
        right: .2rem;
        padding-right: .4rem;
    }
    .twoLi{
        width: 300%;
        z-index: 1;
        text-align: left;
        position: relative;
        right: 5.33rem;
    }
    a{
        text-decoration: none;
        font-size: .4rem;
        color: #666;
    }
    .container{
        height: 2.9rem;
        width: 6.33rem;
        position: relative;
        top: .3rem;
        right: .4rem;
        overflow: hidden;
    }
    .eler{
        display: block;
        position: relative;
        bottom: 2.4rem;
        height: 2.4rem;
        width: 5.33rem;
        float: left;
        left: 5.33rem;
    }
    .elers{
        display: block;
        position: relative;
        bottom: 2.4rem;
        height: 2.4rem;
        width: 5.33rem;
        float: left;
        left: 5.33rem;
    }
    #ifyCenter{
        width: 100%;
        height: 10%;
        position: fixed;
        margin-top: 12%;
    }
    .vessel{
        width: 100%;
        height: 12.6%;
        background-color: white;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        text-align: center;
        border-bottom: 1px solid rgb(223, 223, 223);
        z-index: 1;
    }
    .ifyTop{
        width: 100%;
        height: 7%;
        background-color: rgb(49, 144, 232);
        border-bottom: 1px solid rgb(49, 144, 232);
        position: fixed;
        top: 0;
        text-align: center;
        font-size: 0.8rem;
        color: white;
        font-weight: 800;
        line-height: 2.1rem;
        z-index: 1;
    }
    .ifyTop p{
        display: inline;
    }
    .goBack{
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 0.6rem;
        top: 0.46rem;
        background: url(../../images/login_arrows.png) no-repeat;
        background-position: center center;
        background-size: contain;
    }
    .classify{
        width: 100%;
        height: 100%;
        background-color: white;
    }
    .center{
        position: relative;
        bottom: .16rem;
    }
    .right{
        position: relative;
        bottom: .16rem;
    }
    :root{
        background-color: lightblue;
    }
/*下部布局*/
.mar{

  padding:0.4rem;
}
.left{
  float:left;
  width:20%;
}
.right{
  font-size:0.6rem;
  float:left;
  width:75%;
  width:75%;
  box-sizing: border-box;
  margin-left:0.4rem;


}
/*.right  P{*/
/*float:left;*/
/*}*/
.ctu{
  width:100%;
  height:2rem;


}
.zuo{
  float:left;
  text-align: left;
}
.you{
  float:right;
  text-align: right;
}

.pingpai{
  background-color: orange;
  color: white;
  margin-right:0.3rem;
}
name{
  font-weight: bold;
}
.one p{
  padding:0 0.2rem;
}
.pfen{
  margin-right:0.4rem;
}
.two .you p{
  float:right;
}
.fengniao{
  background-color: dodgerblue;
  color:white;
  margin-right:0.2rem;
}
.da{
  color:dodgerblue;
  border:1px #ccc solid;
}
.there  p{
  margin:0 0.2rem;
}
.there {
  font-size:0.5rem;
}
.there .tim{
  color: dodgerblue;
}
.one .you p{
  float:right;
}
.dingpai{
  Height: 5rem;
  margin:0;
}
.ctu img{
  width:100%;
}
.tu{
  opacity: 0;
}
.select{
  color:#3190e8;
}
.select .tu {
  opacity: 1;
}
</style>
