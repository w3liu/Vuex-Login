import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/components/account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Account',
      component: Account
    }
  ]
})
