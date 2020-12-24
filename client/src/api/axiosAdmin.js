import axios from 'axios';
import queryString from 'query-string';
const axiosAdmin = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 20000,
    headers: {
    'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
// axiosAdmin.defaults.headers.common['Authorization'] = localStorage.getItem('token')
axiosAdmin.interceptors.request.use(async (config) => {
    // const token = localStorage.getItem('token')
    // config.headers.authorization = token || ''
    // console.log(config)
    return config;
})
axiosAdmin.interceptors.response.use((response) => {
    if (response && response.data) {
    return response.data;
}
return response;
}, (error) => {
// Handle errors
    return error.response.data.message
    // /throw error;
});
export default axiosAdmin;