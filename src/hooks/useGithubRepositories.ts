import { useQuery } from 'react-query';
import { githubService } from '../services/github';

export const useGithubRepositories = () => {
  return useQuery('repositories', githubService.getRepositories);
}; 