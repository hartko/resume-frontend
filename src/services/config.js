import axios from 'axios'
import VueAxios from 'vue-axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

instance.interceptors.request.use(
    config => {
        if (!config.headers.Authorization) {
            const token = localStorage.getItem('id');
            console.log(token)

            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
        }

        return config;
    }
)
export default instance;
