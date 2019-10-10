import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/index.vue'
import Center from './views/home/center.vue'
import Films from './views/home/films.vue'
import cinema from './views/home/cinema.vue'

import City from './views/city/index.vue'
import Money from './views/money/index.vue'
import Login from './views/login/index.vue'
import FilmInfo from './views/film/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'films',
          component: Films
        },
        {
          path: 'cinema',
          component: cinema
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/film',
      name: 'filmInfo',
      component: FilmInfo
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
export default router
