export interface User {
  id: string;
  login: string;
  name: string | null;
  avatarUrl: string;
  email: string | null;
  avatar_url?: string;
} 