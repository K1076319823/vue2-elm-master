import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);
// import Header from '../components/Header';
import Footer from '../components/Footer';
// import Load from '../components/Load';
// import Registe from '../components/Registe';
import Mai from '../components/Mai';
import Sou from '../components/Sou';
import Ding from '../components/Ding';
import My from '../components/My';

export default new Router({
  routes: [
    // {path:'/Header', component:Header,children:[
    //     { path:'Load',component:Load},
    //     { path:'Registe ',component:Registe},
    //   ]},

        { path:'/Mai',component:Mai},
        { path:'/Sou',component:Sou},
        { path:'/Ding',component:Ding},
        { path:'/My',component:My},

  ]
})
