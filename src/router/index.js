import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../pages/homepage'
import home from '../pages/home'
import messageboard from '../pages/messageboard'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/home'
    },
    { path: '/home',
      name: 'home',
      component: home,
      children: [
        { path: '/',
          component: homepage
        },
        { path: '/messageboard',
          component: messageboard}]
    }]
})

