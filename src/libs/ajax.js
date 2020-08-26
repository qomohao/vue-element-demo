import axios from 'axios';
import Vue from 'vue';
import {
    Message,
    Loading
} from 'element-ui';
import envConfig from '@libs/envConfig'
/**
 * axios配置
 */
Vue.prototype.axios = axios;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = envConfig.baseUrl;
axios.defaults.timeout = 30000;

/**
 * http request
 */
axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
    // 请求头
    // config.headers.common['token'] = '';
    Message.closeAll();
    Loading.service().close()
    Loading.service({
        text: 'request loading...'
    });
    return config;
}, error => {
    Loading.service().close()
    return Promise.reject(error);
});
// http response
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            Message.closeAll();
            Loading.service().close()
            const resCode = response.data.code;
            const resMsg = response.data.msg;
            switch (resCode) {
                case 0:
                    Message.success(resMsg)
                    return Promise.resolve(response.data);
                case 500:
                    Message.error(resMsg)
                    break;
                default:
                    return Promise.resolve(response.data);
            }
        } else {
            return Promise.resolve(response.data);
        }
    },
    error => {
        return Promise.reject(error);
    }
);
/**
 * GET
 */
export const $get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/**
 * POST
 */
export const $post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}