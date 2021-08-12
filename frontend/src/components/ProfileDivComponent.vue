<template>
    <div class="card">
        <div class="card-body">
            <template v-if="Object.keys(user).length">
                <h5 class="card-title">Hi, {{ user.name }}</h5>
                <router-link :to="{name: 'blog.create'}" class="btn btn-primary w-100 mb-1">Compose Blog</router-link>
                <a href="javascript:void(0)" class="btn btn-primary w-100" @click.prevent="logout()">Log me out</a>
            </template>
            <template v-else>
                <h5 class="card-title">Login your account</h5>
                <router-link :to="{name: 'auth.login'}" class="btn btn-primary w-100">Sign in</router-link>
            </template>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api'
import {GET_USER} from '../modules/AuthenticationModule/store.js'

export default defineComponent({
    setup(props, instance) {

        const user = ref({})
        
        function logout() {
            this.$emit('logout')
        }

        onMounted(() => {
            user.value = {...instance.root.$store.getters[GET_USER]}
        })

        watch(
            () => instance.root.$store.getters[GET_USER],
            () => user.value = {...instance.root.$store.getters[GET_USER]}
        )

        return { logout, props, user }
    },
})
</script>
