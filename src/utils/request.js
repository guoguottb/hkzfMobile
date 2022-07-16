import axios from "axios";
const request = axios.create({
  baseURL: "http://liufusong.top:8080",
  timeout: 30000,
});

export default request;

import store from "@/store";

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 获取token
    const token = store.state.user;
    //判断token是否真正存在
    if (token) {
      config.headers.authorization = `${token}`;
      //Bearer
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
