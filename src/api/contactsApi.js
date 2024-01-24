import {api} from './api'

export const getContacts = async () => {
  const { data } = await api.get(`/contacts`);
  return data;
}

export const addContacts = async contact => {
  const { data } = await api.post(`/contacts`, contact);
  return data;
}

export const dellContacts = async id => {
  const { data } = await api.delete(`/contacts/${id}`);
  return data;
}