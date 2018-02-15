import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from './theme/Content.vue'
import Login from './theme/Login.vue'
import ErrorPage from './theme/ErrorPage.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({y: 0}),
routes: [
  {path: '/', component: Content},
  {path: '/login', component: Login},
  {path: '*', component: ErrorPage}
]
})

export default router
