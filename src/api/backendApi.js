import axios from 'axios';

export const backendApi = axios.create({
    baseURL: import.meta.env.VITE_URL_BACKEND,
    headers: {},
});
