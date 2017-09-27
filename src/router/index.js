import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Zhuce from '@/components/zhuce'
import GeRen from '@/components/GeRen'
import Add from '../containers/Add.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/zhuce',
      component: Zhuce
    },
    {
      path: '/geren',
      component: GeRen,
    },
    {
      path : '/add',
      component :　Add
    }
  ]
})
