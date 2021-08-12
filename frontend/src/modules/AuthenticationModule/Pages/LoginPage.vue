<template>
    <div>
        Login | <router-link :to="{name: 'auth.register'}">Register</router-link>
        
        <form @submit.prevent class="col-md-5 mx-auto col-12 mt-5 text-left">
            <div v-if="error">
                <div class="alert alert-danger" role="alert">
                 {{ error }}
                </div>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" v-model="form.email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="form.password" placeholder="Password">
            </div>
            <div class="w-100 text-center">

                <button type="submit" v-if="!loading" class="btn btn-primary" @click.prevent="request_login()">Login</button>
                
                <button v-else class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Logging you in...
                </button>

            </div>
        </form>

    </div>
</template>

<script>

import { defineComponent, reactive, ref } from '@vue/composition-api'
import { LOGIN_USER } from '../store.js'

export default defineComponent({

    name: 'LoginPage',

    setup(props, {root}) {

        const error = ref('')

        const loading = ref(false)

        const form = reactive({
            email: '',
            password: ''
        })

        const request_login = async () => {

            loading.value = true
            error.value = ''

            await root.$store.dispatch(LOGIN_USER, {...form}).then(() => root.$router.replace({name: 'home'}))
            .catch( err => {
                console.log()
                error.value = err?.response.data.message
            })

            loading.value = false

        }

        return {
            request_login,
            form,
            error,
            loading,
            props
        }
    },

})
</script>

<style scoped>

</style> 