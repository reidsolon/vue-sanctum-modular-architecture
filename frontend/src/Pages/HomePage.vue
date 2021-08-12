<template>
    <div class="container">
        <div class="row py-5">
            <div class="col-md-3 col-lg-3 col-12">
                <ProfileComponent @logout="logout()"></ProfileComponent>
                <SocialComponent/>
            </div>
            <div class="col-md-9 col-lg-9 col-12">
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api'
import { LOGOUT_USER } from '../modules/AuthenticationModule/store.js'

const SocialComponent = () => import('../components/SocialsComponent.vue')
const ProfileComponent = () => import('../components/ProfileDivComponent.vue')

export default defineComponent({
    components: {
        ProfileComponent,
        SocialComponent
    },
    setup(props, {root}) {

        onMounted(() => {
            
        })

        function logout() {
            root.$store.dispatch(LOGOUT_USER, {}).then( () => {
                if(root.$router.currentRoute?.name != 'auth.login') {
                    root.$router.replace({name: 'auth.login'})
                }
            })
        }

        return {
            props,
            logout
        }
        
    },
})
</script>
