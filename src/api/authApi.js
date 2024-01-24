import {api} from './api'

export const clearAuthHeader = () => {
  api.defaults.headers.Authorization = ''	
};

export const setAuthHeader = token => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const signUpApi = async (body) => {
	const { data } = await api.post('users/signup', body)
	return data
}

export const loginApi = async (body) => {
	const { data } = await api.post('users/login', body)
	return data
}

export const logoutUser = async () => {
  return api.post('users/logout');
}

export const refreshApi = async () => {
  const data = await api.get('users/current');
  return data;
};