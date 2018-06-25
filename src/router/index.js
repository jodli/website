import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Privacy from '@/components/Privacy'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})
