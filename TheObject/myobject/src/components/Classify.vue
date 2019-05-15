<template>
    <div class="classify">
        <Load></Load>
        <div class="vessel">
            <!-- 顶端跳转部分 -->
            <div class="ifyTop">
                <router-link :to="{path:'/index'}" class="goBack"></router-link>
                <p> {{ $store.state.Dclass }} </p>
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

                        <template slot="title" >排序</template>
                        <p class="centerP">
                            <img src="../../images/sort.png" alt="请升级浏览器">
                            <span>智能排序</span>
                            <img src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP">
                            <img src="../../images/place.png" alt="请升级浏览器">
                            <span>距离最近</span>
                            <img src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP">
                            <img src="../../images/flame.png" alt="请升级浏览器">
                            <span>销量最高</span>
                            <img src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP">
                            <img src="../../images/money.png" alt="请升级浏览器">
                            <span>起送价最低</span>
                            <img src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP">
                            <img src="../../images/clock.png" alt="请升级浏览器">
                            <span>配送最快</span>
                            <img src="../../images/check.png" alt="请升级浏览器">
                        </p>
                        <p class="centerP">
                            <img src="../../images/star.png" alt="请升级浏览器">
                            <span>评分最高</span>
                            <img src="../../images/check.png" alt="请升级浏览器">
                        </p>

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
            indexNum:0  //默认给0
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
            }

        },
        components: {
            Load
        }
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
        width: 320%;
        height: 10.4rem;
        position: relative;
        bottom: .48rem;
        right: 11.6rem;
        line-height: 1.2rem;
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
        width: 200%;
        height: 20%;
        position: fixed;
        margin-top: 12%;
        background-color: white;
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
        left: 0;
        top: 0;
        right: 0;
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
        height: 110%;
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
</style>
