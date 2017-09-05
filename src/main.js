// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';
 //import 'vue-ydui/dist/ydui.rem.css';
 // 使用px：import 'vue-ydui/dist/ydui.px.css'; 
import VueResource from 'vue-resource'


Vue.use(YDUI);
Vue.config.productionTip = false

Vue.use(VueResource);
/*使用$http*/
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
//window._url = 'http://paula.wangmc.cn/php/index.php/'
// window._url = 'https://fe.wangmc.cn/'
window._url = 'http://localhost:3000/'
//window._url = 'http://39.108.161.205/banner'
//window.YDUI = YDUI.dialog;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
