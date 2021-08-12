<template>
    <div class="row py-5">
        <div class="col-12">
            <div>
                <h4>My Blogs</h4>
            </div>
            <router-link :to="{name: 'blog.create'}">Compose</router-link>
            <!-- <a href="javascript:void(0)" v-if="!loading" @click.prevent="loadList()"> Refresh</a> -->
        </div>
        <div class="col-12 py-5" v-if="!loading">
            <template v-for="(item, index) in blogs">
                <BlogRow @delete="deleteBlog" :blog="item" :index="index" :key="index" />
            </template>
        </div>
        <div class="col-12" v-else>
            Loading...
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api'
import { BLOG_LIST, DELETE_BLOG } from '../store.js'

const BlogRow = () => import('../Components/BlogRowComponent.vue')

export default defineComponent({

    components: {
        BlogRow
    },

    setup(props, instance) {

        const blogs = ref([])

        const loading = ref(false)

        async function deleteBlog({ id, index }) {
            
            await instance.root.$store.dispatch(DELETE_BLOG, { id, index })

        }

        async function loadList() {
            loading.value = true

            await instance.root.$store.dispatch(BLOG_LIST)

            loading.value = false
        }

        watch(
            () => instance.root.$store.getters[BLOG_LIST],
            () => blogs.value = [...instance.root.$store.getters[BLOG_LIST]]
        )

        onMounted(async () => {

            loadList()
        
        })

        return {
            blogs,
            props,
            loading,
            loadList,
            deleteBlog
        }
        
    }
})
</script>
