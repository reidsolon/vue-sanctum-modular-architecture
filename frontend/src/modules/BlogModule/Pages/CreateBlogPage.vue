<template>
    <div class="row py-5">
        <div class="col-12 col-md-7 mx-auto">
            <form @submit.prevent>
                <div>
                    <h4>Create Blog</h4>
                </div>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" v-model="form.title" class="form-control" placeholder="title">
                </div>
                <div class="form-group">
                    <label>Content</label>
                    <textarea class="form-control" v-model="form.content" placeholder="content" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent.stop="save()">Post</button>
            </form>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'
import { SAVE_BLOG } from '../store.js'

export default defineComponent({
    setup(props, {root}) {

        const form = reactive({
            title: '',
            content: ''
        })
        
        async function save() {

            const { data } = await root.$store.dispatch(SAVE_BLOG, {...form}).then(() => {
                root.$router.push({name: 'blog.index'})
            })

            return data

        }

        return {
            props,
            form,
            save
        }

    },
})
</script>
