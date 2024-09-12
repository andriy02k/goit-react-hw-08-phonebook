import axios from 'axios';
import { api } from './api';

axios.defaults.baseURL = 'https://goit-node-rest-api-j1rw.onrender.com/api/';

export const clearAuthHeader = () => {
  api.defaults.headers.Authorization = '';
};

export const setAuthHeader = token => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const signUpApi = async body => {
  const { data } = await api.post('users/register', body);
  console.log(body);
  return data;
};

export const loginApi = async body => {
  try {
    const { data } = await api.post('users/login', body);
    console.log('Login response data:', data);
    return data;
  } catch (error) {
    console.error(
      'Login error:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const logoutUser = async () => {
  return api.get('users/logout');
};

export const refreshApi = async () => {
  const data = await api.get('users/current');
  return data;
};
