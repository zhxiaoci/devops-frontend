import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { WebSocketMessage } from '../types/websocket';
import { useSearchParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { message } from 'antd';

interface ContextType {
    changeMsg: any;
    deployMsg: any
}

const WsContext = createContext<ContextType | undefined>(undefined);

export const WsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchParams] = useSearchParams();
    const repoId = searchParams.get('id');
    const [changeMsg, setChangeMsg] = useState<any>({})
    const [deployMsg, setDeployMsg] = useState<any>({})
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
    
        socket.current.on('workflow_job', (data: any) => {
          console.log(data)
        });
    
        socket.current.on('deployment', (data: any) => {
            console.log(data)
          setDeployMsg(data)
        });
    
        // socket.current.on('pr', (data: any) => {
        //   setLastMessage({ type: 'pr', data });
        // });
    
        socket.current.on('change', (data: any) => {
            setChangeMsg(data)
        });
     
        return () => {
          if (socket.current) {
            socket.current.emit('unsubscribe_repo', repoId);
            socket.current.disconnect();
          }
        };
      }, [repoId]);

      const value = {
        changeMsg, 
        deployMsg
      }

    return <WsContext.Provider value={value}>{children}</WsContext.Provider>;
};

export const useWebSocket = () => {
  const context = useContext(WsContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 