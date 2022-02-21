import axios from 'axios'

let http = axios.create({baseURL: process.env.REACT_APP_API_URL, timeout: 180000})

http.interceptors.request.use(
    config => {
        try {
            config.headers['Content-Type'] = 'application/json'
            config.headers['Accept'] = 'application/json'

            if (false) {
                const token = '#@jgj'.repeat(7)
                config.headers['Authorization'] = `Bearer ${token}`
            }
            return config;
        } catch (e) {

            throw new Error(e)
        }
    },
    error => {
        return Promise.reject(new Error(error));
    }
);

http.interceptors.response.use(
    res => {
        try {
            const {method} = res.config
            if (process.env.NODE_ENV !== 'production' && method === 'post') {
                console.log(res);
            }
            return res.data
        } catch (e) {
            throw new Error(e)
        }

    },
    error => {
        try {
            if (process.env.NODE_ENV !== 'production')
                console.log(error.response ?? error);

            if (error?.response) {
                let {data} = error.response
                return Promise.reject(data);
            }
        } catch (e) {
            throw new Error(e)
        }
    }
)
export default http
