import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/admin/api'
    // baseURL: 'http://localhost:3000/admin/api'
})

//请求拦截
http.interceptors.request.use(config => {
    //设置请求头
    localStorage.token && (config.headers.Authorization = 'Bearer ' + localStorage.token)
    return config;
}, err => {
    return Promise.reject(err);
});

//响应拦截
http.interceptors.response.use(res => {
    return res;
}, err => {
    //通用的错误处理
    if (err.response.data.message) {
        Vue.prototype.$message({
            type: 'error',
            message: err.response.data.message
        })
        if (err.response.status == 401) {
            router.push('/login')
        }
    }
    return Promise.reject(err);
});

export default http