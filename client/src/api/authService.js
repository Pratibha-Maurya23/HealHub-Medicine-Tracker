import axios from 'axios';

const authAPI = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export const register = (data) => authAPI.post('/auth/register', data);
export const login = (data) => authAPI.post('/auth/login', data);
export const refreshToken = () => authAPI.post('/auth/refresh-token');
export const logout = () => authAPI.post('/auth/logout');
export const getProfile = () => authAPI.get("/auth/profile");

export default authAPI;
