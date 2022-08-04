import axios from 'axios';
import { url } from './url';

export const api = axios.create({
    baseURL: url
})