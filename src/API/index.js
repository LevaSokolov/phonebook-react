/* eslint-disable no-param-reassign */
import axios from 'axios';

const axiosClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

axiosClient.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 400 || error.response.status === 401) {
    return error.response;
  }

  return Promise.reject(error);
});

export default axiosClient;
