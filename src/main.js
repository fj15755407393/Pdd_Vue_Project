// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//初始化时导入需要的插件
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'



// 导入组件(全局注册)
import  Demo from './components/CopyDemo'


Vue.config.productionTip = false

/* eslint-disable no-new */ // eslint禁用新功能
//创建Vue 实例对象
new Vue({
  el: '#app',//挂载
  // 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
  router,//
  components: { App },
  template: '<App/>'
})
