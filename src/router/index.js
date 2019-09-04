import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = require('./import-' + process.env.NODE_ENV)

const mainRoutes = {
  path: '/',
  component: _import('Main'),

}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: _import('Login')
    }
  ]
})
