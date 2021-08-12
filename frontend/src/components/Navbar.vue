<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="nav-item" v-if="!showLoginRegister">
                    <router-link :to="{name: 'blogs'}" class="nav-link">Blogs</router-link>
                </li>
                <li class="nav-item" v-if="showLoginRegister">
                    <router-link class="nav-link" :to="{name: 'auth'}">Login/Register</router-link>
                </li>
                <li class="nav-item" v-else>
                    <template v-if="user">
                        <a href="javascript:void(0)" class="nav-link">Hi, {{ user.name }} <a href="" @click.prevent.stop="logout()"> - Log me out</a></a> 
                    </template>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { defineComponent, ref, watch } from '@vue/composition-api'
import { GET_USER } from '../modules/AuthenticationModule/store.js'

export default defineComponent({

    name: 'Navbar',

    setup(props, instance) {

        const showLoginRegister = ref(true)
        const user = ref({})

        function logout() {
            this.$emit('logout')
        }

        watch(
            () => instance.root.$store.getters[GET_USER],
            () => {
                var info = instance.root.$store.getters[GET_USER]
                if(info) {
                    showLoginRegister.value = false
                    user.value = info
                } else {
                    showLoginRegister.value = true
                    user.value = info
                }
            }
        )
        
        return {
            props,
            showLoginRegister,
            user,
            logout
        }
    },

})
</script>
