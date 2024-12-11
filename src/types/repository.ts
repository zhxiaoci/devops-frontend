import { WorkItem, Change } from './workItem';

export interface Repository {
  id: number;
  name: string;
  description?: string;
  githubId: number;
  defaultBranch: string;
  environments: Environment[];
  changes: Change[];
  owner: {
    id: number;
    login: string;
    name?: string;
    avatarUrl?: string;
  };
}

export interface Branch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
}

export interface Environment {
  id: string;
  name: string;
  status: string;
  currentVersion?: string;
  lastDeployTime?: string;
  changes: Change[];
  deployHistory: Array<{
    id: number;
    version: string;
    status: string;
    deployedAt: string;
    deployedBy: {
      id: number;
      login: string;
      name?: string;
      avatarUrl?: string;
    };
  }>;
}

export interface DeploymentStatus {
  environment: string;
  status: 'pending' | 'in_progress' | 'success' | 'failure';
  description: string;
  created_at: string;
}