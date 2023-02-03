import axios from 'axios';

export const recobrosApi = axios.create({
    baseURL: 'http://localhost:5084/api/Aplicaciones/'
})