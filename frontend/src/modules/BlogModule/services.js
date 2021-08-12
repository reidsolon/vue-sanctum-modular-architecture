export const save = ({title, content}) => {
    return new Promise((res, rej) => {
        window.axios.post('http://localhost:7003/blogs', {
            title: title,
            content: content,
        }).then(result => res(result))
        .catch(error => rej(error))
    })
}

export const list = () => {
    return new Promise((res, rej) => {
        window.axios.get('http://localhost:7003/blogs')
        .then(result => res(result))
        .catch(err => rej(err))
    })
}

export const blog = ({ id }) => {
    return new Promise((res, rej) => {
        window.axios.get(`http://localhost:7003/blogs/${id}`)
        .then(result => res(result))
        .catch(err => rej(err))
    })
}

export const deleteBlog = ({ id }) => {
    return new Promise((res, rej) => {
        window.axios.delete(`http://localhost:7003/blogs/${id}`)
        .then(result => res(result))
        .catch( err => rej(err))
    })
}

export default { save, list, blog, deleteBlog }