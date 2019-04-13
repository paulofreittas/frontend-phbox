import axios from 'axios';

const api = axios.create({
    baseURL: 'https://phbox.herokuapp.com'
});

export default api;
