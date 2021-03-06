// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './routers'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import axios from 'axios'
import globalVariable from './global_variable'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.prototype.GLOBAL = globalVariable;

const router = new VueRouter({
  routes: routers
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
