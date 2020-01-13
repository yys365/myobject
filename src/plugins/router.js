import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

 
//代表着所有组件 引入了,以为着所有的样式 都插入到style标签了
import Home from '../pages/home.vue'
import Lyb from '../pages/lyb.vue'
import Rczp from '../pages/rczp.vue'

import Reg from '../pages/reg.vue'
import Lxwm from '../pages/lxwm.vue'
import Detail from '../pages/detail.vue'
// import NoPage from '../pages/no-page.vue'
// 登录注册页面
import User from '../pages/user.vue'
import Success from '../pages/success.vue'
import Login from '../pages/login.vue'


let routes=[
    {path:'/user',component:User},
    {path:'/success',component:Success},
    {path:'/login',component:Login},
    
    
    
  {path:'/home',component:Home},
  {path:'/lyb',component:Lyb},
  {path:'/rczp',component:Rczp},
  {path:'/lxwm',component:Lxwm},
  
  {path:'/reg',component:Reg},
  {path:'/detail/:_id',component:Detail},
  {path:'/',redirect:'/home'},
  // {path:'*',component:NoPage}
];

let router = new VueRouter({
  mode:'history',
  routes
});

export default router;