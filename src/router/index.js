import Vue from 'vue'
import Router from 'vue-router'
const WeChart = (resolve) => require(['@/components/chat/chat.vue'], resolve)
const friend = (resolve) => require(['@/components/contact/contact.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WeChart',
      component: WeChart
    },
    {
      path: '/chat',
      name: 'WeChart',
      component: WeChart
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    }
  ]
})
