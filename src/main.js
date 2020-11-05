import Vue from 'vue'
import App from './App.vue'

import '@/assets/scss/_main.scss'

import '@/plugins/fontawesome'
import '@/plugins/element.js'
import '@/plugins/layouts'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
