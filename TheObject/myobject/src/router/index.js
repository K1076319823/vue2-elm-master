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
import CitySou from '../components/CitySou';
import Balance from "../components/Balance";
import Baspask from "../components/Baspask";
import Account from "../components/Account";
import ChangeUser from "../components/ChangeUser";
import jifenspeak from "../components/jifenspeak";
import Com_PromptBox from '../components/Com_PromptBox';
import VipCenter_F from '../components/VipCenter_F';
import Vip_OnlinePay_F from '../components/Vip_OnlinePay_F';
import Vip_Convert_F from '../components/Vip_Convert_F';
import DownLoading from '../components/Down_Loading';
import IntegralShop_F from '../components/IntegralShop_F';
import My_Integral_F from '../components/My_Integral_F';
import My_Discounts_F from '../components/My_Discounts_F';
import My_HongBao from '../components/My_HongBao';
import My_DaiJinQuan from '../components/My_DaiJinQuan';
import F_Service_Com from '../components/F_Service_Com'
import My_Past_F from '../components/My_Past_F';
import My_ConvertHB from '../components/My_ConvertHB';
import My_Recommend_F from '../components/My_Recommend_F';
import HongBaospeak from '../components/HongBaospaeak';
import daimoneyspaek from '../components/daimoneyspaek';
import huanyuanSpeak from '../components/huanyuanSpeak';
import Shopjilu from '../components/Shopjilu';
import Common from "../components/Common";
import Evaluate from "../components/Evaluate"; // 商品评价
import Dinglist from "../components/Dinglist";
import Proshow from "../components/Proshow";
import CAndESocket from '../components/CAndESocket'; // 插座

import Indent from '../components/Indent' // 下单页面
import Bill from '../components/Bill' // 下单页面 -> 发票组件

import Account_UserName from '../components/Account_UserName';
import Account_Location from '../components/Account_Location';
import Account_LogOutBox from '../components/Account_LogOutBox';
import Account_NewPath from '../components/Account_NewPath';
import Account_Position from'../components/Account_Position';
import Shop_Address from '../components/Shop_Address';
import Select_Address from '../components/Select_Address';
import Select_Position from '../components/Select_Position'
export default new Router({
  routes: [

    { path: '/', redirect: '/Citydingwei' },
    { path: '/index', component: Index },
    { path: '/Mai', component: Mai },
    { path: '/Sou', component: Sou },
    { path: '/Ding', component: Ding },
    {path:'/Dinglist',component:Dinglist},
    { path: '/My', component: My},
    {path:'/Balance',component:Balance},
    {path:'/Baspask',component:Baspask},
    { path: '/Citydingwei', component: Citydingwei },
    { path: '/FserviceC', component: FserviceC },
    { path: '/Login',component: Login },
    { path: '/Reset', component: Reset },
    { path: '/Classify', component: Classify },
    {path:'/CitySou',component:CitySou},
    {path:'/Account',component:Account},
    {path:'/ChangeUser',component:ChangeUser},
    {path:'/jifenspaeak',component:jifenspeak},
    {path:'/Com_PromptBox',component:Com_PromptBox},
    {path: '/VipCenter_F', component: VipCenter_F},
    {path: '/Vip_OnlinePay_F', component: Vip_OnlinePay_F},
    {path: '/Vip_Convert_F', component: Vip_Convert_F},
    {path:'/huanyuanSpeak',component:huanyuanSpeak},
    {path: '/Down_Loading', component: DownLoading},
    {path: '/IntegralShop_F', component: IntegralShop_F},
    {path: '/My_Integral_F', component: My_Integral_F},
    {path:'/F_Service_Com',component:F_Service_Com},
    {path: '/My_Past_F', component: My_Past_F},
    {path:'/My_ConvertHB',component:My_ConvertHB},
    {path:'/My_Recommend_F',component:My_Recommend_F},
    {path: '/My_Discounts_F', component: My_Discounts_F, children: [
        {path:'/',component:My_HongBao},
        {path: '/My_HongBao', component: My_HongBao},
        {path: '/My_DaiJinQuan', component: My_DaiJinQuan}
      ]},
    {path:'/HongBaospeak',component:HongBaospeak},
    {path:'/daimoneyspaek',component:daimoneyspaek},
    {path:'/Shopjilu',component:Shopjilu},
    { path: '/Common',component: Common },
    { path: '/Evaluate',component: Evaluate },
    {path:'/Proshow',component:Proshow},
    {path: '/CAndESocket',component: CAndESocket, children: [
        { path: '/', component: Common },
        { path: 'Common', component: Common },
        { path: 'Evaluate', component: Evaluate }
      ]},
    // 下单页面
    { path: '/Indent', component: Indent },
    // 下单页面 -> 发票组件
    { path: '/Bill', component: Bill },
    {path:'/Account_UserName',component:Account_UserName},
    {path:'/Account_Location',component:Account_Location},
    {path:'/Account_LogOutBox',component:Account_LogOutBox},
    {path:'/Account_NewPath',component:Account_NewPath},
    {path:'/Account_Position',component:Account_Position},
    {path:'/Shop_Address',component:Shop_Address},
    {path:'/Select_Address',component:Select_Address},
    {path:'/Select_Position',component:Select_Position}

  ]
})


