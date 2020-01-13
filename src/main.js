import Vue from 'vue'
import App from '@/layous/App.vue'
import router from './plugins/router.js'

Vue.config.productionTip = false
// 引入基础样式

import'./assets/css/base.css';
//引入字体样式
import './plugins/axios'
import'./assets/js/font.js'
new Vue({
  render: h => h(App),
  router,
  data:{
      bHeader:true
  }
}).$mount('#app')
