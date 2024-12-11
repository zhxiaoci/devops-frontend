import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Card, Tabs, Button, Table, Tag, Space, Modal, Form, Input, Select, Badge, message, Avatar, Popconfirm, Tooltip, Switch } from 'antd';
import { PlusOutlined, BranchesOutlined, DeploymentUnitOutlined, CloseOutlined, InboxOutlined } from '@ant-design/icons';
import { useQuery, useQueryClient } from 'react-query';
import { githubService } from '../../services/github';
import { Repository, Environment } from '../../types/repository';
import { User } from '../../types/user';
import { Change, WorkItem } from '../../types/workItem';


import { useWebSocket } from '../../hooks/useWebSocket';

const { TabPane } = Tabs;

const RepositoryDetail: React.FC = () => {
  const { repoName } = useParams<{ repoName: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const repoId = searchParams.get('id');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [branchType, setBranchType] = useState<'existing' | 'new'>('existing');
  const [newBranchName, setNewBranchName] = useState('');
  const [deleteRemoteBranch, setDeleteRemoteBranch] = useState(false);
  const [selectedChanges, setSelectedChanges] = useState<Record<string, Change | null>>({
    test: null,
    uat: null,
    prod: null,
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentChange, setCurrentChange] = useState<Change | null>(null);
  const [activeEnvironment, setActiveEnvironment] = useState('test');

  // 获取仓库详情
  const { data: repo } = useQuery<Repository>(
    ['repository', repoName],
    () => githubService.getRepository(repoId!)
  );

  // WebSocket 连接
  const { lastMessage } = useWebSocket(repoId);
  
  // 分支查询
  const { data: branches, isLoading: branchesLoading } = useQuery(
    ['branches', repoId],
    () => githubService.getBranches(repoId!),
    {
      enabled: !!repoId,
    }
  );

  // 获取工作项列表
  const { data: workItems } = useQuery(
    ['workItems', repoId],
    () => githubService.getWorkItems(),
    {
      enabled: !!repoId,
    }
  );

  // 获取组织成员
  const { data: orgMembers } = useQuery(
    'orgMembers',
    githubService.getOrganizationMembers
  );

  // 部署环境卡片
  const EnvironmentCard: React.FC<{ env: Environment }> = ({ env }) => {
    const selectedChange = selectedChanges[env.name];
    
    // 部署区域的表格列定义
    const deploymentColumns = [
      {
        title: '变更内容',
        dataIndex: 'title',
        key: 'title',
        width: '30%',
      },
      {
        title: '分支',
        dataIndex: 'branchName',
        key: 'branchName',
        width: '25%',
        render: (text: string) => (
          <Space>
            <BranchesOutlined />
            {text}
          </Space>
        ),
      },
      {
        title: '关联工作项',
        dataIndex: 'workItem',
        key: 'workItem',
        width: '25%',
        render: (workItem?: WorkItem) => (
          workItem ? (
            <Tag>
              {workItem.title}
            </Tag>
          ) : null
        ),
      },
      {
        title: '操作',
        key: 'action',
        width: '20%',
        render: (_: any, record: Change) => (
          <Popconfirm
            title="确定要移出部署区域吗？"
            okText="是"
            cancelText="否"
            onConfirm={() => handleExitDeployArea(false, env.name, record)}
          >
            <Button 
              size="small"
              icon={<CloseOutlined />}
              danger
            >
              移除
            </Button>
          </Popconfirm>
        ),
      },
    ];

    return (
      <Card className="environment-card">
        <div className="environment-header">
          <Space>
            <DeploymentUnitOutlined />
            <span className="environment-name">{env.name.toUpperCase()}</span>
            <Badge
              status={
                env.status === 'success' 
                  ? 'success' 
                  : env.status === 'deploying' 
                    ? 'processing' 
                    : env.status === 'failed'
                      ? 'error'
                      : 'default'
              }
              text={
                env.status === 'success' 
                  ? '部署成功' 
                  : env.status === 'deploying' 
                    ? '部署中' 
                    : env.status === 'failed'
                      ? '部署失败'
                      : '未部署'
              }
            />
          </Space>
          <Space>
            {env.currentVersion && (
              <div className="environment-info">
                <div>当前版本: {env.currentVersion}</div>
                {env.lastDeployTime && (
                  <div>
                    最近部署: {new Date(env.lastDeployTime).toLocaleString()}
                  </div>
                )}
              </div>
            )}
            {selectedChange && (
              <Button 
                type="primary"
                icon={<DeploymentUnitOutlined />}
                onClick={() => handleExitDeployArea(true, env.name, selectedChange)}
              >
                部署变更
              </Button>
            )}
          </Space>
        </div>
        <div className="environment-content">
          {env.changes.length > 0 ? (
            <Table
              columns={deploymentColumns}
              dataSource={env.changes}
              pagination={false}
              rowKey="id"
              size="small"
            />
          ) : (
            <div className="environment-empty">
              <InboxOutlined />
              <div>暂无待部署的变更</div>
            </div>
          )}
        </div>
      </Card>
    );
  };

  // 变更表格列定义
  const changeColumns = [
    {
      title: '变更内容',
      dataIndex: 'title',
      key: 'title',
      width: '20%',
    },
    {
      title: '分支',
      dataIndex: 'branchName',
      key: 'branchName',
      width: '15%',
      render: (text: string) => (
        <Space>
          <BranchesOutlined />
          {text}
        </Space>
      ),
    },
    {
      title: '关联工作项',
      dataIndex: 'workItem',
      key: 'workItem',
      width: '25%',
      render: (workItem?: WorkItem) => (
        workItem ? (
          <Tag>
            {workItem.title}
          </Tag>
        ) : null
      ),
    },
    {
      title: 'Diff',
      dataIndex: 'diffStats',
      key: 'diffStats',
      width: '10%',
      render: (stats: { additions: number; deletions: number }) => (
        <Space>
          <span style={{ color: '#52c41a' }}>+{stats.additions}</span>
          <span style={{ color: '#f5222d' }}>-{stats.deletions}</span>
        </Space>
      ),
    },
    {
      title: '创建者',
      dataIndex: 'createdBy',
      key: 'createdBy',
      width: '15%',
      render: (user: User) => (
        <Space>
          <Avatar size="small" src={user?.avatarUrl} />
          {user?.name || user?.login}
        </Space>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: Change) => (
        <Space size="middle">
          <Popconfirm
            title={`是否立即部署到${activeEnvironment}环境？`}
            okText="是"
            cancelText="否"
            onConfirm={() => handleSubmitChange(record, true, activeEnvironment)}
            onCancel={() => handleSubmitChange(record, false, activeEnvironment)}
          >
            <Button 
              type="link" 
              size="small"
              disabled={Object.values(selectedChanges).some(change => change !== null)}
            >
              提交
            </Button>
          </Popconfirm>
          <Button 
            type="link" 
            size="small" 
            onClick={() => handleEditChange(record)}
          >
            编辑
          </Button>
          <Popconfirm
            title={
              <div>
                <div style={{ marginBottom: 8 }}>确定要删除这个变更吗？</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  同时删除远程分支：
                  <Switch
                    size="small"
                    checked={deleteRemoteBranch}
                    onChange={setDeleteRemoteBranch}
                  />
                </div>
              </div>
            }
            okText="确定"
            cancelText="取消"
            onConfirm={() => handleDeleteChange(record)}
          >
            <Button 
              type="link" 
              size="small" 
              danger
            >
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // 新建变更的模态框
  const [isChangeModalVisible, setIsChangeModalVisible] = useState(false);
  const [changeForm] = Form.useForm();

  const handleCreateChange = async (values: any) => {
    try {
      const branchName = values.branchType === 'existing' 
        ? values.branch 
        : `feature/${values.newBranch}`;

      await githubService.createChange(repoId!, {
        title: values.title,
        description: values.description,
        branchName,
        isNewBranch: values.branchType === 'new',
        workItemId: values.workItemId,
      });

      setIsChangeModalVisible(false);
      changeForm.resetFields();
      message.success('变更创建成功');
      queryClient.invalidateQueries(['repository', repoName]);
    } catch (error) {
      message.error('创建变更失败');
    }
  };

  // 处理函数
  const handleSubmitChange = async (change: Change, deployNow: boolean, environment: string) => {
    try {
      if (deployNow) {
        await githubService.deployChange(repoId!, change.id.toString(), environment);
        message.success('开始部署变更');
      } else {
        await githubService.addChangeToPendingDeploy(repoId!, change.id, environment);
        setSelectedChanges(prev => ({
          ...prev,
          [environment]: change
        }));
        message.success(`变更已提交到${environment}环境部署区域`);
      }
      queryClient.invalidateQueries(['repository', repoName]);
    } catch (error) {
      message.error('操作失败');
    }
  };

  const handleExitDeployArea = async (deployNow: boolean, environment: string, change: Change) => {
    if (!change) return;

    try {
      if (deployNow) {
        await githubService.deployChange(repoId!, change.id.toString(), environment);
        message.success('开始部署变更');
      }
      await githubService.removeChangeFromPendingDeploy(repoId!, change.id, environment);
      setSelectedChanges(prev => ({
        ...prev,
        [environment]: null
      }));
      queryClient.invalidateQueries(['repository', repoName]);
    } catch (error) {
      message.error('操作失败');
    }
  };

  const handleEditChange = (change: Change) => {
    setIsEditMode(true);
    setCurrentChange(change);
    changeForm.setFieldsValue({
      title: change.title,
      description: change.description,
      workItemId: change.workItem?.id,
      assigneeId: change.createdBy.id,
    });
    setIsChangeModalVisible(true);
  };

  const handleDeleteChange = async (change: Change) => {
    try {
      await githubService.deleteChange(repoId!, (change.id), deleteRemoteBranch);
      message.success('变更已删除');
      // 刷新数据
      queryClient.invalidateQueries(['repository', repoName]);
    } catch (error) {
      message.error('删除失败');
    }
  };

  const queryClient = useQueryClient();

  useEffect(() => {
    if (lastMessage) {
      switch (lastMessage.type) {
        case 'push':
          message.info(
            `New push to ${lastMessage.data.ref} by ${lastMessage.data.pusher.name}`
          );
          queryClient.invalidateQueries(['branches', repoId]);
          break;

        case 'deployment':
          message.info(
            `Deployment to ${lastMessage.data.environment}: ${lastMessage.data.status}`
          );
          queryClient.invalidateQueries(['environments', repoId]);
          break;

        case 'pr':
          message.info(
            `PR #${lastMessage.data.number} ${lastMessage.data.action} by ${lastMessage.data.user.login}`
          );
          break;
      }
    }
  }, [lastMessage, repoId, queryClient]);

  // 修改表单提交处理函数
  const handleFormSubmit = async (values: any) => {
    try {
      if (isEditMode && currentChange) {
        // 处理编辑
        await githubService.updateChange(currentChange.id.toString(), {
          title: values.title,
          description: values.description,
          workItemId: values.workItemId,
          assigneeId: values.assigneeId,
        });
        message.success('变更已更新');
      } else {
        // 处理新建
        const branchName = values.branchType === 'existing' 
          ? values.branch 
          : `feature/${values.newBranch}`;

        await githubService.createChange(repoId!, {
          title: values.title,
          description: values.description,
          branchName,
          isNewBranch: values.branchType === 'new',
          workItemId: values.workItemId,
        });
        message.success('变更创建成功');
      }

      setIsChangeModalVisible(false);
      setIsEditMode(false);
      setCurrentChange(null);
      changeForm.resetFields();
      queryClient.invalidateQueries(['repository', repoName]);
    } catch (error) {
      message.error(isEditMode ? '更新失败' : '创建失败');
    }
  };

  // 修改模态框关闭处理
  const handleModalClose = () => {
    setIsChangeModalVisible(false);
    setIsEditMode(false);
    setCurrentChange(null);
    changeForm.resetFields();
  };

  // 修改环境切换处理函数
  const handleEnvironmentChange = (env: string) => {
    setActiveEnvironment(env);
  };

  return (
    <div className="repository-detail">
      <div className="page-header">
        <h2 className="page-title">{repo?.name}</h2>
      </div>

      {/* 部署环境区域 */}
      <div className="environments-section">
        <Tabs 
          defaultActiveKey="test" 
          type="card"
          onChange={handleEnvironmentChange}
        >
          {repo?.environments.map(env => (
            <TabPane tab={`${env.name.toUpperCase()}环境`} key={env.name}>
              <EnvironmentCard env={env} />
            </TabPane>
          ))}
        </Tabs>
      </div>

      {/* 变更列表部分 */}
      <div className="changes-section">
        <div className="section-header">
          <h3>变更列表</h3>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            onClick={() => setIsChangeModalVisible(true)}
          >
            新建变更
          </Button>
        </div>
        <Table 
          columns={changeColumns} 
          dataSource={repo?.changes} 
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>

      {/* 新建变更模态框 */}
      <Modal
        title={isEditMode ? "编辑变更" : "新建变更"}
        visible={isChangeModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={600}
      >
        <Form 
          form={changeForm} 
          onFinish={handleFormSubmit} 
          layout="vertical"
        >
          <Form.Item 
            name="title" 
            label="变更内容" 
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入变更内容" />
          </Form.Item>

          <Form.Item 
            name="description" 
            label="详细描述"
          >
            <Input.TextArea rows={4} placeholder="请输入详细描述" />
          </Form.Item>

          <Form.Item
            name="workItemId"
            label="关联工作项"
          >
            <Select
              allowClear
              placeholder="选择要关联的工作项"
              style={{ width: '100%' }}
            >
              {workItems?.map((item: WorkItem) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {isEditMode ? (
            <Form.Item
              name="assigneeId"
              label="转交给"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="选择要转交的用户"
                style={{ width: '100%' }}
              >
                {orgMembers?.map((member: User) => (
                  <Select.Option key={member.id} value={member.id}>
                    <Space>
                      <Avatar size="small" src={member.avatarUrl} />
                      {member.name || member.login}
                    </Space>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          ) : (
            <>
              <Form.Item 
                name="branchType" 
                label="分支选择"
                rules={[{ required: true }]}
              >
                <Select onChange={(value) => setBranchType(value)}>
                  <Select.Option value="existing">使用已有分支</Select.Option>
                  <Select.Option value="new">创建新分支</Select.Option>
                </Select>
              </Form.Item>

              {branchType === 'existing' ? (
                <Form.Item
                  name="branch"
                  label="选择分支"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="请选择分支"
                    loading={branchesLoading}
                  >
                    {branches?.map((branch: { name: string }) => (
                      <Select.Option key={branch.name} value={branch.name}>
                        {branch.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              ) : (
                <Form.Item
                  name="newBranch"
                  label="新分支名称"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="请输入新分支名称" />
                </Form.Item>
              )}
            </>
          )}

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {isEditMode ? '保存' : '创建'}
              </Button>
              <Button onClick={handleModalClose}>取消</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RepositoryDetail; 