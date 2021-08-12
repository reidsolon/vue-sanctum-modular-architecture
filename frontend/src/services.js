import { login } from './modules/AuthenticationModule/services.js'

export const ping = () => {
    return new Promise((res, rej) => {
        window.axios.get('http://localhost:7003/sanctum/csrf-cookie')
        .then(result => res(result))
        .catch(err => rej(err))
    })
}

export const getUser = () => {
    return new Promise((res, rej) => {
        window.axios.get('http://localhost:7003/user')
        .then(result => res(result))
        .catch(err => rej(err))
    })
}

export const logoutUser = () => {
    return new Promise((res, rej) => {
        window.axios.post('http://localhost:7003/logout')
        .then(result => res(result))
        .catch( err => rej(err))
    })
}

export const loginUser = ({email, password}) => {
    return new Promise((res, rej) => {
        login({email, password}).then(result => res(result)).catch(error => rej(error))
    })
}

export default { ping, getUser, logoutUser, loginUser }