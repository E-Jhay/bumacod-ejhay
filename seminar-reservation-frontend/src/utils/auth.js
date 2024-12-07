import jwt_decode from 'jwt-decode';

export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getUser = () => {
  const token = getToken();
  return token ? jwt_decode(token) : null;
};

export const logout = () => {
  localStorage.removeItem('token');
};
