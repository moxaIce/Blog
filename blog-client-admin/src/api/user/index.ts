import request from '@/utils/request'

interface IPostLoginParams {
    userName: string,
    userPassword: string
}
export const postLogin = (data: IPostLoginParams) => {
    return request.post('/users/login', data)
}