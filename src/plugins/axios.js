import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://172.16.207.120:8080', // 后端 API 的基础 URL
  timeout: 10000, // 请求超时时间（单位：毫秒）
  headers: {
    'Content-Type': 'application/json', // 设置默认请求头为 JSON 格式
  },
});

export default instance;