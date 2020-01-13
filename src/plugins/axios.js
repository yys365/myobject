import axios from 'axios';
import Vue from 'vue';
// import vm from '../main.js'

Vue.prototype.$axios=axios;
window.axios=axios;
export default axios;



