import axios from 'axios';

const apiInstance = axios.create({
    //baseURL: 'http://localhost:8000/api/',
    baseURL: `${process.env.REACT_APP_BACKEND_URL}auth`,
    timeout: 5000, // timeout after 5 seconds
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default apiInstance;