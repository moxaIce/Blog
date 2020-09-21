import request from '@/utils/request'

interface ICreateBlogParams {
    author: string,
    title: string,
    content: string
}

export const createBlog = (data: ICreateBlogParams) => {
    console.log(`data is`, data);
    return request.post('/blogs/createBlog', data)
}