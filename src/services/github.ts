import { Octokit } from 'octokit';
import { Repository } from '../types/repository';
import { Change, WorkItem, WorkItemStatus } from '../types/workItem';
import apiClient from './axios';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN
});

export const githubService = {
  getRepositories: async () => {
    const response = await apiClient.get('/github/repos');
    return response.data;
  },

  getDirectRepositories: async () => {
    const response = await octokit.repos.listForAuthenticatedUser();
    return response.data;
  },

  getBranches: async (githubId: number | string) => {
    const response = await apiClient.get(`/github/repos/${githubId}/branches`);
    return response.data;
  },

  getRepository: async (githubId: number | string): Promise<Repository> => {
    const response = await apiClient.get(`/github/repos/${githubId}`);
    return response.data;
  },

  createWorkItem: async (data: {
    title: string;
    description: string;
    assigneeIds: string[];
  }) => {
    const response = await apiClient.post('/github/work-items/create', data);
    return response.data;
  },

  updateWorkItem: async (workItemId: string, data: Partial<WorkItem>) => {
    const response = await apiClient.put(
      `/github/work-items/${workItemId}`,
      data
    );
    return response.data;
  },

  deleteWorkItem: async (workItemId: string) => {
    await apiClient.delete(`/github/work-items/${workItemId}`);
  },

  getWorkItems: async () => {
    const response = await apiClient.get('/github/work-items');
    return response.data;
  },

  createChange: async (githubId: number | string, data: {
    title: string;
    description: string;
    branchName: string;
    isNewBranch: boolean;
    workItemId?: number;
  }) => {
    const response = await apiClient.post(`/github/repos/${githubId}/changes`, data);
    return response.data;
  },

  deployChange: async (githubId: number | string, changeId: string, environment: string) => {
    const response = await apiClient.post(
      `/github/repos/${githubId}/changes/${changeId}/deploy`,
      { environment }
    );
    return response.data;
  },

  editChange: async (githubId: number | string, changeId: string, data: Partial<Change>) => {
    const response = await apiClient.put(
      `/github/repos/${githubId}/changes/${changeId}`,
      data
    );
    return response.data;
  },

  deleteChange: async (githubId: number | string, changeId: number | string, deleteRemoteBranch: boolean = false) => {
    await apiClient.delete(
      `/github/repos/${githubId}/changes/${changeId}`,
      { data: { deleteRemoteBranch } }
    );
  },

  getOrganizationMembers: async () => {
    const response = await apiClient.get('/github/org/members');
    return response.data;
  },

  updateChange: async (changeId: string, data: {
    title?: string;
    description?: string;
    workItemId?: number | null;
    assigneeId?: number;
  }) => {
    const response = await apiClient.put(`/github/changes/${changeId}`, data);
    return response.data;
  },

  addChangeToPendingDeploy: async (
    githubId: number | string,
    changeId: number | string,
    environment: string
  ) => {
    const response = await apiClient.post(
      `/github/repos/${githubId}/environments/${environment}/changes/${changeId}`
    );
    return response.data;
  },

  removeChangeFromPendingDeploy: async (
    githubId: number | string,
    changeId: number | string,
    environment: string
  ) => {
    const response = await apiClient.delete(
      `/github/repos/${githubId}/environments/${environment}/changes/${changeId}`
    );
    return response.data;
  },

  getDeployHistory: async (
    githubId: number | string,
    environment: string,
    limit: number = 10
  ) => {
    const response = await apiClient.get(
      `/github/repos/${githubId}/environments/${environment}/history`,
      { params: { limit } }
    );
    return response.data;
  },
}; 