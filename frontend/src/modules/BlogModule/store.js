import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { ref } from "@vue/composition-api"
import BlogService from './services.js'

Vue.use(VueCompositionAPI)

export const APPEND_BLOG = 'blog/append'
export const SET_BLOGS = 'blog/set'
export const SAVE_BLOG = 'blog/save'
export const UPDATE_BLOG = 'blog/update'
export const DELETE_BLOG = 'blog/delete'
export const VIEW_BLOG = 'blog/view'
export const BLOG_LIST = 'blog/list'

export const state = {
    blogs: ref([])
}

export const actions = {

    [BLOG_LIST]: async ({commit}) => {
        return new Promise((res, rej) => {
            BlogService.list().then(result => {
                res(result)
                commit(SET_BLOGS, result.data.data)
            }).catch(err => rej(err))
        })
    },

    [SAVE_BLOG]: async ({commit}, { title, content }) => {
        return new Promise((res, rej) => {
            BlogService.save({ title, content }).then(result => {
                const { data } = result 
                commit(APPEND_BLOG, { blog: data.data })
                res(result)
            }).catch( err => rej(err))
        })
    },

    [DELETE_BLOG]: async ({dispatch}, { id }) => {
        return new Promise((res, rej) => {
            BlogService.deleteBlog({id})
            .then(result => {
                res(result)
                dispatch(BLOG_LIST)
            }).catch(err => rej(err))
        }) 
    },

    [VIEW_BLOG]: async ({commit}, { id }) => {
        return new Promise((res, rej) => {
            BlogService.blog({ id }).then( result => {
                res(result)
                commit()
            })
            .catch( err => rej(err))
        })
    },

    [UPDATE_BLOG]: async ({commit}) => {
        commit
    }
}

export const mutations = {
    [APPEND_BLOG]: (state, { blog }) => state.blogs.value.push(blog),
    [SET_BLOGS]: (state, blogs) => state.blogs.value = [...blogs]
}

export const getters = {

    [VIEW_BLOG]: (state) => (index) => state.blogs.value[index],

    [BLOG_LIST]: (state) => state.blogs.value

}

export default { state, actions, mutations, getters }