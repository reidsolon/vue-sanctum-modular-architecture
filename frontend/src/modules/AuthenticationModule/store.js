import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

import { reactive } from '@vue/composition-api'
import AppService from '../../services.js'

export const GET_USER = 'auth/user'
export const GET_IS_LOGIN = 'auth/user/is_login'
export const LOGOUT_USER = 'auth/user/logout'
export const LOGIN_USER = 'auth/user/login'
export const SET_USER = 'auth/user/set'

export default {

    state: {
        user: reactive({
            is_login: false,
            info: null
        })
    },

    actions: {
    
        [GET_USER]: async ({commit}) => {
    
            return new Promise((res, rej) => {
                
                AppService.getUser().then( result => {
    
                    const { data } = result
    
                    commit(SET_USER, data)
    
                    res(result)
    
                }).catch( err => rej(err))
    
            })
    
        },
    
        [LOGIN_USER]: async ({dispatch}, {email, password}) => {
            return new Promise((res, rej) => {
                AppService.loginUser({email, password})
                .then(result => {res(result); dispatch(GET_USER)})
                .catch(error => rej(error))
            })
        },
    
        [LOGOUT_USER]: async ({commit}) => {
            return new Promise((res, rej) => {
                AppService.logoutUser().then(result => {
    
                    const data = {
                        is_login: false,
                        info: null,
                    }
                    
                    commit(SET_USER, data)
    
                    res(result)
    
                }).catch( error => rej(error))
            })
        }
    },

    mutations: {
        [SET_USER]: (state, value) => {
            state.user.is_login = value.is_login
            state.user.info = value.user
        },
    },

    getters: {
        [GET_USER]: (state) => {
            return state.user.info
        },
        [GET_IS_LOGIN]: (state) => {
            return state.user.is_login
        }
    }
}