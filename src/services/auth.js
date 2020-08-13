import { post } from './request';

export const fetchSignup = (name, email, password) => {
  return post('/api/v1/users/signup', { name, email, password });
};

export const fetchLogin = (email, password) => {
  return post('/api/v1/users/login', { email, password });
};
