import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FolderOutlined,
  ProjectOutlined,
  BranchesOutlined,
  IssuesCloseOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: 'repositories',
      label: '仓库',
      icon: <FolderOutlined />,
      children: [
        {
          key: '/',
          label: '项目仓库',
          icon: <ProjectOutlined />,
        },
      ],
    },
    {
      key: 'workItems',
      label: '工作项',
      icon: <IssuesCloseOutlined />,
      children: [
        {
          key: '/work-items/list',
          label: '工作项列表',
        },
        {
          key: '/work-items/board',
          label: '看板视图',
        },
      ],
    },
    {
      key: 'team',
      label: '团队',
      icon: <TeamOutlined />,
      children: [
        {
          key: '/team/members',
          label: '成员管理',
        },
      ],
    },
  ];

  return (
    <Sider
      width={200}
      style={{
        background: '#fff',
        borderRight: '1px solid #f0f0f0',
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={['repositories', 'workItems', 'team']}
        style={{ height: '100%', borderRight: 0 }}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};

export default Sidebar; 