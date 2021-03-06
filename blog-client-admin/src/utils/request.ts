/**
 * @description 请求封装
 */

import axios, {AxiosResponse} from 'axios';

interface IResponse extends AxiosResponse {
    success?: boolean
}


const instance = axios.create({
    timeout: 1000,
    headers: {
        'content-type': 'application/json'
    }
})

instance.interceptors.response.use(function (response: IResponse) {
    if (response.status === 200 && response.data.success) {
        return response.data.data || {}
    }
}, function (error: any) {
    return Promise.reject(error)
})

const post = (url: string, data?: any): any => {
    return instance.post(url, data)
}

const get = (url: string, data?: any): any => {
    return instance.get(url, data);
}

export default {
    post,
    get
}