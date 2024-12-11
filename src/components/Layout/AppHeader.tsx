import React from 'react';
import { Layout, Button, Space, Avatar, Typography, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useUser } from '../../contexts/UserContext';

const { Header } = Layout;
const { Text } = Typography;

const AppHeader: React.FC = () => {
  const { user, loading, login, logout } = useUser();

  const userMenu = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: logout,
    },
  ];

  return (
    <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo">
        <Text strong style={{ fontSize: '18px' }}>GitHub DevOps</Text>
      </div>
      <div>
        {loading ? (
          <Button loading>Loading...</Button>
        ) : user ? (
          <Dropdown menu={{ items: userMenu }} placement="bottomRight">
            <Space style={{ cursor: 'pointer' }}>
              <Avatar src={user?.avatar_url} />
              <Text>{user.name || user.login}</Text>
            </Space>
          </Dropdown>
        ) : (
          <Button type="primary" icon={<UserOutlined />} onClick={login}>
            Login with GitHub
          </Button>
        )}
      </div>
    </Header>
  );
};

export default AppHeader; 