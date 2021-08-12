<template>
    <div v-if="blog" class="mb-2">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ blog.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ blog.created_at }}</h6>
                <p class="card-text" style="white-space: pre-line">{{ blog.content }}</p>
                <router-link :to="{name: 'blog.view', params: {id: blog.id}}" class="card-link">View</router-link>
                <a href="#" class="card-link" @click.prevent="deleteBlog(blog.id, index)">Delete</a>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({

    props: {
        index: Number,
        blog: Object
    },

    setup() {

        function deleteBlog(id, index) {
            this.$emit('delete', {
                id, index
            })
        }

        return {
            deleteBlog
        }
        
    },
})
</script>
