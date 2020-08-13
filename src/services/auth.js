import { get, post } from './request';

export const fetchSignup = (name, email, password) => {
  return post('/api/v1/auth/signup', { name, email, password });
};

export const fetchLogin = (email, password) => {
  return post('/api/v1/auth/login', { email, password });
};

export const fetchVerify = () => {
  return get('/api/v1/auth/verify');
};
