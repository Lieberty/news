import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routeConfig.js'

import store from './store/index.js'
//vuex状态管理
import axios from 'axios'
import Loading from './components/loading/index.js'

import Time from './filters/normalTime.js'

//路由配置
Vue.use(VueRouter);
Vue.use(Loading);

Vue.filter('normalTime',Time.normalTime);


/*const routes=[
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column} 
];*/  //不能放在下面去了，必须放onst router = new VueRouter上面

const router = new VueRouter({
	
	scrollBehavior: () => ({ y: 0 }), 
	// 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
  //这里等价于routes：routes这里的名字只能设置为routes，第二个routes为上面引入routes		
});


//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
//把axios对象挂在vue原型上	


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
