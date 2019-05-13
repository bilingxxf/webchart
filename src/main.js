// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { fetch, http } from '@/assets/js/http'
import '@/assets/js/fn'

import '@/assets/css/style.scss'

Vue.config.productionTip = false

Vue.prototype.$fetch = fetch
Vue.prototype.$http = http

Vue.filter('dialogTime', function (time) {
  const date = new Date(time)
  const RE_DATE = /(\d{2}):(\d{2}):(\d{2})/
  const match = RE_DATE.exec(date)
  let hour = match[1]
  const pm = hour > 11 ? 'PM' : 'AM'
  hour = hour > 11 ? (hour - 12) : Number(hour)
  return `${hour}:${match[2]} ${pm}`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
