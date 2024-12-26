import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { WebSocketMessage } from '../types/websocket';
import { message } from 'antd';

export const useWebSocket = (repoId: string | null) => {
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    if (!repoId) return;

    const token = localStorage.getItem('github_token');
    socket.current = io(process.env.REACT_APP_WS_URL || 'ws://localhost:3000', {
      auth: {
        token: `Bearer ${token}`,
      },
    });

    socket.current.on('connect', () => {
      console.log('WebSocket connected');
      socket.current?.emit('subscribe_repo', repoId);
    });

    socket.current.on('connect_error', (error: any) => {
      console.error('Connection error:', error);
      message.error('WebSocket connection failed');
    });

    socket.current.on('error', (error: any) => {
      console.error('WebSocket error:', error);
      message.error(error.data.message);
    });

    socket.current.on('push', (data: any) => {
      setLastMessage({ type: 'push', data });
    });

    socket.current.on('deployment', (data: any) => {
      // setLastMessage({ type: 'deployment', data });
      console.log(data)
    });

    socket.current.on('pr', (data: any) => {
      setLastMessage({ type: 'pr', data });
    });

    socket.current.on('workflow_job', (data: any) => {
      console.log('workflow_job', data);
    });

    socket.current.on('deploy_status', (data: any) => {
      console.log('pending_change_removed', data);
    });

    

    return () => {
      if (socket.current) {
        socket.current.emit('unsubscribe_repo', repoId);
        socket.current.disconnect();
      }
    };
  }, [repoId]);

  return { lastMessage, socket };
}; 