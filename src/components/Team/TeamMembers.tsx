import React from 'react';
import { Table, Avatar, Button, Tag } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const TeamMembers: React.FC = () => {
  const columns = [
    {
      title: 'Member',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar src={record.avatar} />
          {text}
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => <Tag color="blue">{role}</Tag>,
    },
    {
      title: 'Permissions',
      dataIndex: 'permissions',
      key: 'permissions',
      render: (permissions: string[]) => (
        <>
          {permissions.map(perm => (
            <Tag key={perm}>{perm}</Tag>
          ))}
        </>
      ),
    },
  ];

  const mockData = [
    {
      key: '1',
      name: 'John Doe',
      avatar: 'https://github.com/johndoe.png',
      role: 'Admin',
      permissions: ['write', 'manage', 'review'],
    },
    // Add more mock data
  ];

  return (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
        <h2>Team Members</h2>
        <Button type="primary" icon={<UserAddOutlined />}>
          Add Member
        </Button>
      </div>
      <Table columns={columns} dataSource={mockData} />
    </div>
  );
};

export default TeamMembers; 