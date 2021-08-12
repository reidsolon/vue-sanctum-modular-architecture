<template>
    <div id="container__auth" class="py-4">
        <h2>Authentication</h2>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import { defineComponent } from '@vue/composition-api'
import { GET_IS_LOGIN } from './store.js'

export default defineComponent({

    setup() {
        
    },

    beforeRouteEnter (to, from, next) {
        next(vm => {
            if(vm.$store.getters[GET_IS_LOGIN]) {
                vm.$router.back()
            }
        })
    }

})
</script>
<style scoped>
#container__auth {
    text-align: center;
}
</style>