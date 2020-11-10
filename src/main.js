import Vue from 'vue'
import App from './App.vue'

import '@/assets/scss/_main.scss'

import '@/plugins/vue-perfect-scrollbar'
import '@/plugins/fontawesome'
import '@/plugins/element'
import '@/plugins/layouts'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
