import axios from 'axios';

const api = axios.create({
    baseURL: 'https://phbox-backend1.herokuapp.com'
});

export default api;
