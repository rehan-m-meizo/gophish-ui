import axios from 'axios';


const service = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json',
        'credentials': 'include',
    }
})

service.interceptors.request.use((config) => {
    return config;
});

service.interceptors.response.use((response) => {
    return response;
});

export default service