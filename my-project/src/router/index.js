import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/city'
import Login from '@/components/login'
import Reset from '@/components/reset'
import Hot from '@/components/hot'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'city',
      component: City
    },
    {
      path: '/hot/:id',
      name: 'hot',
      component:Hot
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/reset',
      component: Reset
    }
  ]
})
