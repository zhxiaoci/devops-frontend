import React, { useState } from 'react';
import { Table, Tag, Button, Space, Card, Avatar, Modal, Form, Input, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { githubService } from '../../services/github';
import { User } from '../../types/user';
import { WorkItem, WorkItemStatus, WorkItemStatusMap } from '../../types/workItem';

interface AssigneeWithUser {
  user: User;
}

const WorkItemsList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { data: workItems, isLoading } = useQuery(
    ['workItems'],
    () => githubService.getWorkItems(),
  );

  const createWorkItemMutation = useMutation(
    (data: { title: string; description: string; assigneeIds: string[] }) =>
      githubService.createWorkItem(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['workItems']);
        setIsModalVisible(false);
        form.resetFields();
        message.success('工作项创建成功');
      },
      onError: () => {
        message.error('创建失败');
      },
    }
  );

  const handleCreateWorkItem = (values: any) => {
    createWorkItemMutation.mutate(values);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: WorkItemStatus) => {
        const { color, text } = WorkItemStatusMap[status];
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: '负责人',
      dataIndex: 'assignees',
      key: 'assignees',
      width: 200,
      render: (assignees: AssigneeWithUser[]) => (
        <Avatar.Group maxCount={3}>
          {assignees?.map(assignee => (
            <Avatar
              key={assignee.user?.id}
              src={assignee.user?.avatarUrl}
              alt={assignee.user?.name || assignee.user?.login}
            />
          ))}
        </Avatar.Group>
      ),
    },
    {
      title: '创建人',
      dataIndex: 'createdBy',
      key: 'createdBy',
      width: 150,
      render: (user: User) => (
        <Space>
          <Avatar src={user?.avatarUrl} size="small" />
          {user?.name || user?.login}
        </Space>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 150,
      render: (date: string) => new Date(date).toLocaleString(),
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small" danger>删除</Button>
        </Space>
      ),
    },
  ];

  const { data: members, isLoading: membersLoading } = useQuery(
    'orgMembers',
    () => githubService.getOrganizationMembers(),
  );

  return (
    <div className="card-container">
      <div className="page-header">
        <h2 className="page-title">工作项列表</h2>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          size="large"
          onClick={() => setIsModalVisible(true)}
        >
          新建工作项
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={workItems}
        loading={isLoading}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        bordered={false}
        rowClassName={() => 'table-row'}
      />

      <Modal
        title="新建工作项"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
        }}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateWorkItem}
        >
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入标题' }]}
          >
            <Input placeholder="请输入工作项标题" />
          </Form.Item>

          <Form.Item
            name="description"
            label="描述"
          >
            <Input.TextArea rows={4} placeholder="请输入工作项描述" />
          </Form.Item>

          <Form.Item
            name="assigneeIds"
            label="负责人"
            rules={[{ required: true, message: '请选择负责人' }]}
          >
            <Select
              mode="multiple"
              placeholder="请选择负责人"
              optionFilterProp="children"
              loading={membersLoading}
            >
              {members?.map((member: { id: string; avatarUrl: string; name?: string; login: string }) => (
                <Select.Option key={member?.id} value={member?.id}>
                  <Space>
                    <Avatar size="small" src={member?.avatarUrl} />
                    {member.name || member.login}
                  </Space>
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button 
                type="primary" 
                htmlType="submit" 
                loading={createWorkItemMutation.isLoading}
              >
                创建
              </Button>
              <Button onClick={() => {
                setIsModalVisible(false);
                form.resetFields();
              }}>
                取消
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default WorkItemsList; 