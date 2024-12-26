import { WorkItem, Change } from './workItem';

export type EnvName = 'test' | 'uat' | 'prod';

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
  id: number;
  name: string;
  status: number;
  step: number;
  currentVersion?: string;
  lastDeployTime?: string;
  repoId: number;
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