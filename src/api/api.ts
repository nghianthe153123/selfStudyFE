import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // URL Spring Boot
    withCredentials: true,
});

export default api;
