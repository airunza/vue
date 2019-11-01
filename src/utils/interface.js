import Vue from 'vue'
import axios from 'axios'
import AxiosConfig from './axios-config'
// import qs from 'qs'
var AxiosSND = axios.create(AxiosConfig)
AxiosSND.defaults.withCredentials = true;
Object.defineProperties(Vue.prototype, {
    axios: {
        get() {
            return AxiosSND
        }
    },

    $http: {
        get() {
            return AxiosSND
        }
    }
})

export default {
   
    // 分享描述
    dec:{
        get:'wechatchannel/wxconfig',
        post:'errorlog/insertlog',
        list:'class/themelist'
    } ,
    //获取url参数
    getQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        };
        return null;
     },
    // 获得数据
    getData: function(type, url, params) {
        var that = this
        if (!params) {
            params = {};
        }
        let axios;
        if ('get' == type) {
            axios = AxiosSND.get(url, {
                params: params
            })
        } else if ('post' == type) {
            axios = AxiosSND.post(url, qs.stringify(params));
        }
        let promise = new Promise((resolve, reject) => {
            axios.then(response => {
                if (200 == response.status) {
                    resolve(response);
                } 
            }).catch((error) => {
                // console.log(error, '监测登录')
            })
        })
        return promise;
    },

}