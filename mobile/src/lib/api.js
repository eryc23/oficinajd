/* eslint-disable prettier/prettier */
import { Alert } from 'react-native';
import axios from 'axios';
import { url } from './url';


function showError(err) {
    if (err.response && err.response.data.message) {
        Alert.alert('Ops! Algo deu errado', `${err.response.data.message}`);
    }
}


 const api = axios.create({
    baseURL: url,
    timeout: 5000,
});

export { api, showError };
