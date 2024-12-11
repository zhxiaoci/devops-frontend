export interface PushEvent {
  ref: string;
  commits: Array<{
    id: string;
    message: string;
    author: {
      name: string;
      email: string;
    };
  }>;
  pusher: {
    name: string;
    email: string;
  };
}

export interface DeploymentEvent {
  status: 'pending' | 'success' | 'failure';
  environment: string;
  description: string;
}

export interface PullRequestEvent {
  action: 'opened' | 'closed' | 'reopened';
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

export type WebSocketMessage = {
  type: 'push';
  data: PushEvent;
} | {
  type: 'deployment';
  data: DeploymentEvent;
} | {
  type: 'pr';
  data: PullRequestEvent;
}; 