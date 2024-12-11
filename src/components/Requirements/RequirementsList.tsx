import React from 'react';
import { Table, Tag, Button, Space, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const RequirementsList: React.FC = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Done' ? 'green' : 'blue'}>{status}</Tag>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Assignee',
      dataIndex: 'assignee',
      key: 'assignee',
    },
  ];

  const mockData = [
    {
      id: 'REQ-001',
      title: 'User Authentication',
      status: 'In Progress',
      priority: 'High',
      assignee: 'John Doe',
    },
    // Add more mock data as needed
  ];

  return (
    <div className="card-container">
      <div className="page-header">
        <h2 className="page-title">Requirements List</h2>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          New Requirement
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={mockData}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        bordered={false}
        rowClassName={() => 'table-row'}
      />
    </div>
  );
};

export default RequirementsList; 