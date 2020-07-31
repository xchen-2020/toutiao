import Vue from 'vue'
// 引入app组件
import App from './App.vue'
// 引入vue-router 配置
import router from './router'
// 引入vuex的配置
import store from './store'
//引入axios
// import axios from '../common/myaxios'
// Vue.prototype.$axios=axios;
Vue.config.productionTip = false
// 创建一个vue实例
new Vue({
  router, //vue-router
  store,  //vuex
  render: h => h(App)//将APP组件渲染到#app
}).$mount('#app')
