import React, { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Spin } from 'antd';
import { authService } from '../../services/auth';

const AuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const processed = useRef(false);

  useEffect(() => {
    const code = searchParams.get('code');
    if (code && !processed.current) {
      processed.current = true;
      authService.handleCallback(code)
        .then(() => navigate('/'))
        .catch((error) => {
          console.error('Auth error:', error);
          navigate('/');
        });
    }
  }, [searchParams, navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Spin size="large" tip="Authenticating..." />
    </div>
  );
};

export default AuthCallback; 