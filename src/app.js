import Vue from 'vue'
import AppLayout from './theme/layout.vue'
import router from './router'

const app = new Vue({
  // render: h => h(AppLayout)
  router,
  ...AppLayout
})

export { app, router }
