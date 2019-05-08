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

export default new Router({
  routes: [

        { path: '/', redirect: '/index'},
        {path :'/index', component:Index},
            {path:'/Mai',component:Mai},
            {path:'/Sou',component:Sou},
            {path:'/Ding',component:Ding},
            {path:'/My',component:My},
    {path:'/Citydingwei',component:Citydingwei}
    
  ]
})

console.log('我这走到了')
