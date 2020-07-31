import axios from "axios"
//配置公共的ulr
// process.env.VUE_APP_URL 如果是运行 npm run serve 
// 是从 .env.development文件中读取的
axios.defaults.baseURL=process.env.VUE_APP_URL
// 配置一个请求的拦截
axios.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});
//响应的拦截器
axios.interceptors.response.use(function(response){
// 返回返回数据中的data
return response.data;
},function(error){
    return Promise.reject(error);
});
export default axios