import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../pages/homepage'
import home from '../pages/home'
import classify from '../pages/classify'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'homepage',
    component: homepage,
    children: [
      { path: '/home',
        component: home
      },
      {
        path: '/classify',
        component: classify
      }
    ]
  }]
})

