import React from 'react';
import { Table, Button, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const TeamRoles: React.FC = () => {
  const columns = [
    {
      title: 'Role Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Write Access',
      dataIndex: 'writeAccess',
      key: 'writeAccess',
      render: (access: boolean) => <Switch checked={access} />,
    },
    {
      title: 'Review Required',
      dataIndex: 'reviewRequired',
      key: 'reviewRequired',
      render: (required: boolean) => <Switch checked={required} />,
    },
  ];

  const mockData = [
    {
      key: '1',
      name: 'Admin',
      description: 'Full access to all features',
      writeAccess: true,
      reviewRequired: false,
    },
    {
      key: '2',
      name: 'Developer',
      description: 'Can write code and create PRs',
      writeAccess: true,
      reviewRequired: true,
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
        <h2>Team Roles</h2>
        <Button type="primary" icon={<PlusOutlined />}>
          Add Role
        </Button>
      </div>
      <Table columns={columns} dataSource={mockData} />
    </div>
  );
};

export default TeamRoles; 