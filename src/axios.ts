import axios from "axios";

// バックエンドの接続URL
export const REST_API = 'http://localhost:8080';

// 共通部分を記載
const instance = axios.create({
    baseURL: REST_API,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});

export default instance;
