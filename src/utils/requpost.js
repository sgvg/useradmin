import  axios from "axios"

let requpost =  axios.create({
     // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
      // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
      
      baseURL:"http://localhost:8080",
      
        //timeout:5000,设置请求超时，如果超时会中止请求发送
      
})


//请求拦截器

requpost.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    config.headers['token'] = localStorage.getItem('token')
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});




export default requpost