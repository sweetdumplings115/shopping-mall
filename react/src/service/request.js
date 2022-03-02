import axios from "axios";


import {BASE_URL,TIMEOUT} from "./config"

const instace = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})


instace.interceptors.request.use(config => {
   
    config.timeout = 30000; 
    let token = localStorage.getItem("token");
    console.log("请求被拦截");
    // console.log(token);
    if (token) {
      //将token放到请求头发送给服务器,将tokenkey放在请求头中
      config.headers.authorization = token;    ///koa2用的是 const {authorization = "" } = ctx.request.header; 要用authorization
      //也可以这种写法
      // config.headers['accessToken'] = Token;
   }
    return config;
  }, err => {
    return Promise.reject(err);
  })

instace.interceptors.response.use(res => {
    return res.data;
  },err => {
    if(err && err.response){
      switch(err.response.status){
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权访问");
          break;
        default:
          console.log("其他错误");
      }
      return Promise.reject(err.response.data);//直接返回err会只有http状态码及相应情况 没有{code:"xxx",message:"xxx",result}
    }
  })


export default instace;