import { User } from './user';

export enum WorkItemStatus {
  Open = 'open',
  InProgress = 'in_progress',
  Done = 'done',
}

export const WorkItemStatusMap = {
  [WorkItemStatus.Open]: { color: 'blue', text: '待处理' },
  [WorkItemStatus.InProgress]: { color: 'orange', text: '进行中' },
  [WorkItemStatus.Done]: { color: 'green', text: '已完成' },
} as const;

export interface WorkItem {
  id: number;
  title: string;
  description: string;
  status: WorkItemStatus;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    id: number;
    login: string;
    name?: string;
    avatarUrl?: string;
  };
  assignees: Array<{
    user: {
      id: number;
      login: string;
      name?: string;
      avatarUrl?: string;
    };
  }>;
}

export interface Change {
  id: number;
  title: string;
  description: string;
  branchName: string;
  isNewBranch: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    id: number;
    login: string;
    name?: string;
    avatarUrl?: string;
  };
  workItem?: WorkItem;
  diffStats?: {
    additions: number;
    deletions: number;
  };
} 