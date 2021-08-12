export const login = async ({email, password}) => {
    return new Promise( (res, rej) => {
        window.axios.post(`http://localhost:7003/login`, {
            email: email,
            password: password,
        }).then( result => res(result)
        ).catch( err => rej(err))
    })
}

export const register = async ({email, password, confirm_password, name}) => {
    return new Promise((res, rej) => {
        window.axios.post(`http://localhost:7003/register`, {
            email: email,
            password: password,
            password_confirmation: confirm_password,
            name: name,
        }).then(result => res(result))
        .catch( err => rej(err))
    })
}

export const logout = async () => {
    return new Promise( re => {
        window.axiox.post(`http://localhost:7003/logout`)
        .then(res => re(res))
    })
}

export default { login, logout, register }