// 0. 如果使用模块化机制编程，进入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import Router from 'vue-router'
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来，我们一般都是建好了组件再来写路由的
// 所以就会有好多这样的语句。


import Index from '@/components/Index'
import Company from '@/components/Company'
import Forum from '@/components/Forum'
import Position from '@/components/Position'
import Login from '@/components/generic_components/Login'
import Regist from '@/components/generic_components/Regist'
import Center from '@/components/Center'
import Search from '@/components/Search'
import  BaseMessage from '../components/generic_components/BaseMessage'
import  ResumeCenter from '../components/generic_components/ResumeCenter'
import  DeliveryRecord from '../components/generic_components/DeliverRecord'
import Cput from '../components/generic_components/Cput'





Vue.use(Router)

//定义路由
export default new Router({
  //可以定义多个路由
  routes: [
    {
      path: '/', //浏览器请求接通后会到该域名下的根目录上
      name: 'Home', //所以把这个路由地址作为首页
      component: Index //该路由绑定的组件
    },
    {
      path: '/company/:cid',
      name: 'company',
      component: Company
    },
    {
      path:'/position/:pid',
      name:'position',
      component:Position
    },
    {
      path:'/forum/',
      name:'forum',
      component:Forum

    },
    {
      path:'/login/',
      name:'login',
      component:Login

    },
    {
      path:'/regist/',
      name:'registe',
      component:Regist

    },
    {
      path:'/search/',
      name:'search',
      component:Search

    },
    {
      path:'/center/',
      name:'center',
      component:Center,
      //二级路由
      children:[
        {
          path:'/center/base/',
          name:'basemessage',
          component:BaseMessage


        },
        { path:'/center/resume/',
          name:'resumecenter',
          component:ResumeCenter
        },

        { path:'/center/delivery_record/',
          name:'delivery_record',
          component:DeliveryRecord
        }
      ]

    }
  ]
})
