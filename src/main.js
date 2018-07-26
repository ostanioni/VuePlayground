import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from '@/App.vue'

import '@/registerServiceWorker'

import '@/styles/quasar.styl'
import 'quasar-framework/dist/quasar.ie.polyfills'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import Quasar, * as All from 'quasar'
import QComponents from '@/quasar/components'

Vue.use(Quasar, {
  components: QComponents,
  directives: All,
  plugins: All
})
//console.clear()
console.log( All )

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
