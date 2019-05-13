import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

import Index from '../components/index.vue';
import Mai from '../components/Mai.vue';
import My from '../components/My.vue';
import Sou from '../components/Sou.vue';
import Ding from '../components/Ding.vue';
import Citydingwei from '../components/Citydingwei';
import Footer from '../components/Footer';
import FserviceC from '../components/FserviceC';
import Login from '../components/Login';
import Reset from '../components/Login_reset';
import Classify from '../components/Classify'; 
// 下面这两个是 全局动画组件和 账户信息 组件.
// import Bounce from '../components/Bounce';
import Account from '../components/Account';
// 账户信息组件 ----> 用户名 ----> 修改用户名
import ChangeUser from '../components/ChangeUser'
// 编辑地址
import Addressee from '../components/Addressee'

export default new Router({
  routes: [

    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },
    { path: '/Mai', component: Mai },
    { path: '/Sou', component: Sou },
    { path: '/Ding', component: Ding },
    { path: '/My', component: My },
    { path: '/Citydingwei', component: Citydingwei },
    { path: '/FserviceC', component: FserviceC },
    { path: '/Login',component: Login },
    { path: '/Reset', component: Reset },
    { path: '/Classify', component: Classify },
    // { path: '/Bounce', component: Bounce },
    { path: '/Account',component: Account },
    { path: '/ChangeUser', component: ChangeUser },
    { path: '/Addressee',component: Addressee }
  ]
})

