import { $get, $post } from '@/libs/ajax.js';

/**
 * 获取商城首页商品
 * @param { Object } data 请求参数
 */
const $getGoodsList = (data = {}) => {
    return $get(
        '/api/work/faremall/queryMallGoodsList',
        Object.assign({}, data)
    )
};

export {  
    $getGoodsList,
}