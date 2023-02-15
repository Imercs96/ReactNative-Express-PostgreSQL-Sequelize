import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:3001/api';

export const publicAPI: AxiosInstance = axios.create({ baseURL });

