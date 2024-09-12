import { api } from './api';

export const getContacts = async () => {
  const { data } = await api.get(`contacts`);
  return data;
};

export const addContacts = async contact => {
  console.log(contact);
  const { data } = await api.post(`contacts`, contact);
  console.log(data);
  return data;
};

export const dellContacts = async id => {
  const { data } = await api.delete(`contacts/${id}`);
  return data;
};
