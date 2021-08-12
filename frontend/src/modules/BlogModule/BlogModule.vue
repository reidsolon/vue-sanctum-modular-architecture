<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { GET_IS_LOGIN } from '../AuthenticationModule/store.js'

export default defineComponent({

    setup() {
        
    },

    beforeRouteEnter (to, from, next) {
        next(vm => {
            if(!vm.$store.getters[GET_IS_LOGIN]) {
                vm.$router.back()
            }
        })
    }

})
</script>
