import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Homepage from '../pages/homepage'
import About from '../pages/about.vue'
import Messageboard from '../pages/messageboard'

Vue.use(Router)
/**
路由设计 / => App
**/

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/homepage'
        },
        {
          path: '/homepage',
          component: Homepage
        },
        {
          path: '/messageboard',
          component: Messageboard
        },
        {
          path: '/about',
          component: About
        }
      ]
    }

  ]
})

