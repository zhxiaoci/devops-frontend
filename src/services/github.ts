import axios from 'axios';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN
});

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const githubService = {
  getRepositories: async () => {
    const response = await apiClient.get('/github/repos');
    return response.data;
  },

  getDirectRepositories: async () => {
    const response = await octokit.repos.listForAuthenticatedUser();
    return response.data;
  }
}; 