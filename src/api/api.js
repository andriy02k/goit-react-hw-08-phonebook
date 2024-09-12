import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://goit-node-rest-api-j1rw.onrender.com/api/',
});
