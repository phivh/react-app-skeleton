import axios from 'axios';
import { API, AUTH_TOKEN } from '../configs';

const _apiClient = axios.create({
  baseURL: API.URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 1000 * 30,
});

_apiClient.interceptors.request.use(async (config) => {
  const token = AUTH_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

_apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      const { messages = [] } = error.response.data;

      if (messages.length > 0) {
        throw messages.map((mgs: { message: string }) => mgs.message).join('\n');
      }
    }
    throw error;
  }
);

export const apiClient = _apiClient;
