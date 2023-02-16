import { 
  REACT_APP_BASE_URL, 
  REACT_APP_DEVELOPMENT_API_KEY, 
  REACT_APP_PRODUCTION_API_KEY 
} from '@env';
import AsyncStorage from '@react-native-community/async-storage';
import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// Environment Type
type Environment = {
  development: string;
  production: string;
}

// Environment Props 
const env: Environment = { development: 'development', production: 'production' };

// Base URL
const baseURL: string = REACT_APP_BASE_URL;

// Axios Instances
const publicAPI: AxiosInstance = axios.create({ baseURL });
const privateAPI: AxiosInstance = axios.create({ baseURL });

//Return a boolean
const isDevelopmentEnv: boolean = process.env.NODE_ENV === env.development;

publicAPI.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Configuration
  config.headers['x-api-key'] = isDevelopmentEnv ? 
    REACT_APP_DEVELOPMENT_API_KEY : REACT_APP_PRODUCTION_API_KEY;
  return config;
}, (error: AxiosError) => {
  if(error?.response) Promise.reject(error?.response?.data);
  if(error?.request) Promise.reject(error?.request);

  return Promise.reject(error?.message);
});

// Interceptor privateAPI Middleware
privateAPI.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  // User Token
  const token: string | null = await AsyncStorage?.getItem('@user_token');
  //Token configuration on headers requests
  if(token && config?.headers) {
    // Configuration
    config.headers['x-api-key'] = isDevelopmentEnv ? 
      REACT_APP_DEVELOPMENT_API_KEY : REACT_APP_PRODUCTION_API_KEY;
    config.headers.Authorization = `Bearer ${ token }`;
  }
  return config;
}, (error: AxiosError) => {
  if(error?.response) Promise.reject(error?.response?.data);
  if(error?.request) Promise.reject(error?.request);

  return Promise.reject(error?.message);
});

export { privateAPI, publicAPI };
