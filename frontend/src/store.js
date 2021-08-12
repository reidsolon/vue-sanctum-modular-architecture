import Vue from 'vue'
import Vuex from 'vuex'
import VueCompositionAPI from '@vue/composition-api'

import UserModule from './modules/AuthenticationModule/store.js'
import BlogModule from './modules/BlogModule/store.js'

Vue.use(Vuex)
Vue.use(VueCompositionAPI)

export const store = new Vuex.Store({

    modules: {
        user: UserModule,
        blog: BlogModule
    }

})

export default { store }