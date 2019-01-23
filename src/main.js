import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'

import VueKatex from 'vue-katex'
import 'katex/dist/katex.min.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from '@/App.vue'

import '@/registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
/*
const KaTeX = () => ({
  // Загружаемый компонент. Значение должно быть Promise
  component: import('./MyComponent.vue'),
  // Компонент загрузки, используемый пока загружается асинхронный компонент
  loading: LoadingComponent,
  // Компонент ошибки, используемый при неудачной загрузке
  error: ErrorComponent,
  // Задержка перед показом компонента загрузки. По умолчанию: 200 мс.
  delay: 200,
  // Компонент ошибки будет отображаться, если таймаут
  // был указан и время ожидания превышено. По умолчанию: Infinity.
  timeout: 3000
})
*/
Vue.use(VueKatex)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
