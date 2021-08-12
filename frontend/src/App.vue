<template>
    <div id="app">
        <Navbar @logout="logout()"/>
        <router-view v-if="showView">
        </router-view>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted } from '@vue/composition-api'
import AppService from './services'
import { GET_USER, LOGOUT_USER, GET_IS_LOGIN } from './modules/AuthenticationModule/store.js'

const Navbar = () => import('./components/Navbar.vue')

export default defineComponent({

    name: 'AppComponent',

    components: {
        Navbar,
    },

    setup(props, { root }) {

        const showView = ref(false)

        const ping = () => AppService.ping()

        const user = () => root.$store.dispatch(GET_USER, {})
        
        const logout = () => root.$store.dispatch(LOGOUT_USER, {}).then( () => {
            if(root.$router.currentRoute?.name != 'auth.login') {
                root.$router.replace({name: 'auth.login'})
            }
        })

        onMounted(async () => {
            
            await ping()
            await user().then(() => showView.value = true).catch(() => showView.value = true)

            root.$router.beforeEach((to, from, next) => {
                if((to.name == 'auth.login' || to.name == 'auth.register')) {
                    if(root.$store.getters[GET_IS_LOGIN])
                        next({name: 'home'})
                    else 
                        next()
                } else if(to.meta?.authentication) {
                    if(!root.$store.getters[GET_IS_LOGIN])
                        next({name: 'auth.login'})
                    else 
                        next()
                } else 
                    next()
            })

        })

        return {
            showView,
            props,
            logout
        }
    },
})
</script>


<style>
</style>
