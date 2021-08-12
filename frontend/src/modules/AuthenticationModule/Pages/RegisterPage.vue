<template>
    <div>
        <router-link :to="{name: 'auth.login'}">Login</router-link> | Register

        
        <form @submit.prevent class="col-md-5 mx-auto col-12 mt-5 text-left">
            <div v-if="error">
                <div class="alert alert-danger" role="alert">
                 {{ error }}
                </div>
            </div>
            <div class="form-group">
                <label for="">Name</label>
                <input type="name" class="form-control" v-model="form.name" placeholder="Enter name">
            </div>
            <div class="form-group">
                <label for="">Email address</label>
                <input type="email" class="form-control" v-model="form.email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="form.password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input type="password" class="form-control" v-model="form.confirm_password" placeholder="Confirm Password">
            </div>
            <div class="w-100 text-center">

                <button type="submit" v-if="!loading" class="btn btn-primary" @click.prevent="request_register()">Register</button>
                
                <button v-else class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Signing you up
                </button>

            </div>
        </form>
    </div>
</template>

<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import { register } from '../services.js'

export default defineComponent({

    name: 'RegisterPage',

    setup() {

        const error = ref('')

        const loading = ref(false)

        const form = reactive({
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        })

        const request_register = async () => {

            loading.value = true
            error.value = ''

            const { data } = await register({
                ...form
            }).catch( err => {
                error.value = err?.response.data?.message ?? ''
                loading.value = false
            })

            loading.value = false

            return data;
        }

        return {
            request_register,
            loading,
            error,
            form
        }
        
    },

})
</script>

<style scoped>

</style> 