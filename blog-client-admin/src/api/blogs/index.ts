import request from '@/utils/request'

interface ICreateBlogParams {
    author: string,
    title: string,
    content: string
}

export const createBlog = (data: ICreateBlogParams) => {

    return request.post('/blogs/createBlog', data)
}

export const getList = () => {
    return request.get('/blogs/getList')
}