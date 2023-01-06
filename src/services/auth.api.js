import axios from './config';

export const login = (data) => {
    return axios.post('/api/login', data);
};

export const register = (data) => {
    return axios.post(`/api/register`,data);
};



