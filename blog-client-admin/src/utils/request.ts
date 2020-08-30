/**
 * @description 请求封装
 */

import axios from 'axios';

const instance = axios.create({
    timeout: 1000,
    headers: {
        'Content-type': 'application/json charset=utf-8'
    }
})

instance.interceptors.response.use(function (response) {
    return response
}, function (error: any) {
    return Promise.reject(error)
})

const post = (url: string, data?: any): any => {
    instance.post(url, data)
}

export default {
    post
}