import axios from './config';

export const getUser = (id) => {
    return axios.get(`/api/profile/${id}`)

};