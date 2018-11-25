/*-----------------------------------------------------------------
- Main service to handle http requests
-----------------------------------------------------------------*/
import axios from 'axios'

// Add token
const token = localStorage.getItem('token')

if (token) {
    axios.defaults.headers.common['Authorization'] = 'token ' + token
}

// Create axios instance
let axiosInstance = axios.create({
    baseURL: '',
});

// Handle errors
axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function(error) {

        // check for errorHandle config
        if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
            return Promise.reject(error);
        }

        if (error.response) {
            console.log('-------------------- ERROR --------------------');
            console.log(error.response.data.developerMessage);
        }
    });

export default axiosInstance;