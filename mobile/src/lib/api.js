import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://10.99.100.141:3000'
})