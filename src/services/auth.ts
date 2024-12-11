import { User } from '../types/user';
import apiClient from './axios';

export const authService = {
  login: () => {
    const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const redirectUri = `${window.location.origin}/auth/callback`;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo,user`;
  },

  handleCallback: async (code: string) => {
    const response = await apiClient.post('/auth/callback', { code });
    const { access_token } = response.data;
    localStorage.setItem('github_token', access_token);
    return access_token;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get('/auth/user');
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('github_token');
    window.location.href = '/';
  }
}; 