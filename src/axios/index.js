import router from '../router'
import axios from 'axios'

let Token = localStorage.getItem('Token');
let $http = axios.create({
    baseURL: 'http://zhdj.cd12371.cn/WisdomPartyBuildingServices/api/',
    headers: {
         'Content-type': "application/json",
         "ApiToken": '666'
    }
});
$http.interceptors.request.use(
    config => {
        if (Token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `${Token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
	}
);

// http response 拦截器

$http.interceptors.response.use(
	response => {
	    return response;
	},
	error => {
	    if (error.response) {
		    switch (error.response.status) {
		        case 401: 
	            // 返回 401 清除token信息并跳转到登录页面
	            router.replace({
	                path: '/',
	                query: {redirect: router.currentRoute.fullPath}
	            })
		    }
   		}
    	return Promise.reject(error.response.data)   // 返回接口返回的错误信息
	}
);

export default  $http