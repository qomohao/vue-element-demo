import axios from 'axios';
import Qs from 'qs';
import Vue from 'vue';
import { Message } from 'element-ui';
/**
 * axios配置
 */
Vue.prototype.axios= axios;
axios.defaults.baseURL = '';
axios.defaults.timeout = 30000;

/**
 * API数据请求接口封装
 */
const getAjaxUrl =(baseUrl)=>   {
    return baseUrl;
};
/**
 * http request 请求拦截器
 */
axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
    /**
     * 在发送请求之前做些什么
     */
    Message.closeAll();
    return config;
}, error => {
    /**
     * 对请求错误做些什么
     */
    return Promise.reject(error);
});
// http response 响应拦截器
axios.interceptors.response.use(
    response => {
        /**
         *  response.status === 200表明接口请求成功
         */
        if (response.status === 200) {
            Message.closeAll();
            /**
             * resCode 返回状态码,resMsg 返回提示信息，swicth根据返回状态码进行操作
             */
            // console.log(response)
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
        }else{
            /**
             * 接口请求失败
             */
        }
        // return response;
    },
    error => {
        /**
         * 返回接口返回的错误信息
         */
        return Promise.reject(error);
    }
);
/**
 * GET 请求
 * @param { String } url    请求地址
 * @param { Object } params   参数对象
 * @param { Object } config   配置对象
 * @param { Function } errCallback   回调函数
 */
export const $get = (url = '', params = {}, config = {}, errCallback = null) => {
    return axios.get(getAjaxUrl(url), {params}, config).then(res => {
        return res;
    }).catch(err => {
        errCallback && errCallback();
        return err;
    })
};
/**
 * POST 请求
 * @param { String } url    请求地址
 * @param { Object } params   参数对象
 * @param { Object } config   配置对象
 * @param { Function } errCallback   回调函数
 */
export const $post = (url = '', params = {}, config = {}, errCallback = null) => {
    const _config = Object.assign({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }, config);
    let resultParams;
    if (_config.headers['Content-Type'].toLowerCase().indexOf('json') > -1) {
        resultParams = params;
    } else {
        if (_config.FormData) {
            resultParams = params;
        } else {
            resultParams = Qs.stringify(params);
        }
    }
    return axios.post(getAjaxUrl(url) , resultParams, _config).then(res => {
        return res;
    }).catch(err => {
        errCallback && errCallback();
        return err;
    })
}