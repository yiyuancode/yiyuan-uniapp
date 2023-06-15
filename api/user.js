import { http,api } from '@/utils/requset.js' // 全局挂载引入，配置相关在该common.js文件里修改

export default {
    /**
     * @param {Object} url 接口地址
     * @param {Object} data 数据
     * @param {Object} loading 是否显示加载提示框
     */
    getData(url,data,loading) {
        return api.get(url,{custom: {loading: loading}}, {params: data});
    },
}
