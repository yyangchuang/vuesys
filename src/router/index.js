import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = require('./import-' + process.env.NODE_ENV)

const mainRoutes = {
  path: '/',
  component: _import('main'),
  beforeEnter (to, from, next) {
    if (true) {
      next({ name: 'login' })
    }
    next()
  }

}
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: _import('common/login')
    },
    mainRoutes
  ]
})
