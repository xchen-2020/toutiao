import Vue from 'vue'
// 引入app组件
import App from './App.vue'
// 引入vue-router 配置
import router from './router'
// 引入vuex的配置
import store from './store'

Vue.config.productionTip = false
// 创建一个vue实例
new Vue({
  router, //vue-router
  store,  //vuex
  render: h => h(App)//将APP组件渲染到#app
}).$mount('#app')
