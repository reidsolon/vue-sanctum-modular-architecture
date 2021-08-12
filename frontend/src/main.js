import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import VueTailwind from 'vue-tailwind'
import VueRouter from 'vue-router'
import { router } from './router.js'
import { store } from './store.js'
window.Popper = require('popper.js').default;
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.use(VueTailwind)
Vue.use(VueRouter)
Vue.use(Vuex)

require('./bootstrap')

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')