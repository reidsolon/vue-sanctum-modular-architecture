<template>
    <div v-if="blog" class="py-5">
        <div class="jumbotron">
            <h1 class="display-4">{{ blog.title }}</h1>
            <p class="lead">{{ blog.created_at }}</p>
            <hr class="my-4">
            <p style="white-space: pre-wrap;">{{ blog.content }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { VIEW_BLOG } from '../store.js'

export default defineComponent({
    setup(props, { root }) {

        const blog = ref({})

        async function load() {
            const { data } = await root.$store.dispatch(VIEW_BLOG, {id: root.$router.currentRoute.params?.id})

            blog.value = {...data?.data}
        }

        onMounted( async () => {
            await load()
        })

        return {
            load,
            props,
            blog
        }
    },
})
</script>
