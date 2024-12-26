import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tabs, Button, Space, Form, message,  Popconfirm,  Switch, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useQuery, useQueryClient } from 'react-query';
import { githubService } from '../../services/github';
import { Repository } from '../../types/repository';
import { Change } from '../../types/workItem';

import ChangeList from './components/ChangeList'
import EnvironmentCard from './components/EnvironmentCard';
import ChangeModal from './components/ChangeModal';

// import { useWebSocket } from '../../hooks/useWebSocket';
import { useWebSocket } from "../../contexts/WsContext";

import  loadSubApp  from '../../qiankun';
const { TabPane } = Tabs;

const RepositoryDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const repoId = searchParams.get('id');
  const [deleteRemoteBranch, setDeleteRemoteBranch] = useState(false);
  const [changeList, setChangeList] = useState<Change[]>()
  const [currentChange, setCurrentChange] = useState<Change | null>(null);
  const [activeEnvironment, setActiveEnvironment] = useState('test');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  const queryClient = useQueryClient();
  const { changeMsg } = useWebSocket()
  
  // 获取仓库详情
  const { data: repo } = useQuery<Repository>(
    ['repository', repoId],
    () => githubService.getRepository(repoId!),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    const { changeId, action, data } = changeMsg
    switch (action) {
      case 'create': {
        setChangeList(prevList => [...prevList!, data])
        break
      }
      case 'update': {
        setChangeList(prevList => prevList?.map(change => {
          return change.id === changeId ? data : change
        }))
        break
      }
      case 'delete': {
        setChangeList(prevList => prevList?.filter(change => changeId !== change.id))
        break
      }
      case 'submit': {
        console.log(changeMsg)
        queryClient.setQueryData(['repository', repoId], (oldData: Repository | undefined) => {
          if (!oldData) return oldData as unknown as Repository;
          return {
            ...oldData,
            environments: oldData.environments.map(env => {
              const newChange = changeList?.find(change => change.id === changeId)
              return env.name === data.envName ? {
                ...env,
                changes: newChange ? [...env.changes, newChange] : env.changes
              } : env
            })
          };
        });
        break
      }
      case 'unsubmit': {
        queryClient.setQueryData(['repository', repoId], (oldData: Repository | undefined) => {
          if (!oldData) return oldData as unknown as Repository;
          return {
            ...oldData,
            environments: oldData.environments.map(env => {
              return env.name === data.envName ? {
                ...env,
                changes: env.changes.filter(change => change.id !== changeId)
              } : env
            })
          };
        });
        break
      }
    }
  }, [changeMsg])


  const fetchChangeList = async () => {
    const data = await githubService.getChangeList(repoId!)
    setChangeList(data)
  }
  useEffect(() => {
     fetchChangeList()
    //  loadSubApp('DIFFVIEWER', {})
  }, [repoId!])

  const notInDeployChanges = useMemo(() => {
    return changeList?.filter(change => 
      !repo?.environments.find(item => item.name === activeEnvironment)?.changes.map((item) => item.id).includes(change.id)
    )
  }, [repo, activeEnvironment, changeList])

  // 新建变更的模态框
  const [isChangeModalVisible, setIsChangeModalVisible] = useState(false);
  const [ changeForm ] = Form.useForm();

  // 修改模态框关闭处理
  const handleModalClose = () => {
    setIsChangeModalVisible(false);
    setCurrentChange(null);
    changeForm.resetFields();
  };

  // 处理函数
  const handleSubmitChange = async (change: Change, deployNow: boolean, environment: string) => {
    try {
      if (deployNow) {
        await githubService.deployChange(repoId!, change.id.toString(), environment);
        message.success('开始部署变更');
      } else {
        await githubService.addChangeToPendingDeploy(repoId!, change.id, environment);
        message.success(`变更已提交到${environment}环境部署区域`);
      }
      // queryClient.invalidateQueries(['repository', repoId]);
    } catch (error) {
      message.error('操作失败');
    }
  };

  const handleEditChange = (change: Change) => {
    setCurrentChange(change);
    changeForm.setFieldsValue({
      title: change.title,
      description: change.description,
      workItemId: change.workItem?.id,
      managerId: change.manager.id,
    });
    setIsChangeModalVisible(true);
  };

  const handleDeleteChange = async (change: Change) => {
    try {
      await githubService.deleteChange(repoId!, (change.id), deleteRemoteBranch);
      message.success('变更已删除');
      // 刷新数据
      fetchChangeList()
    } catch (error) {
      message.error('删除失败');
    }
  };

  // WebSocket 连接
  // const { lastMessage } = useWebSocket(repoId);
  // useEffect(() => {
  //   if (lastMessage) {
  //     switch (lastMessage.type) {
  //       case 'push':
  //         message.info(
  //           `New push to ${lastMessage.data.ref} by ${lastMessage.data.pusher.name}`
  //         );
  //         queryClient.invalidateQueries(['branches', repoId]);
  //         break;

  //       case 'deployment':
  //         message.info(
  //           `Deployment to ${lastMessage.data.environment}: ${lastMessage.data.status}`
  //         );
  //         queryClient.invalidateQueries(['environments', repoId]);
  //         break;

  //       case 'pr':
  //         message.info(
  //           `PR #${lastMessage.data.number} ${lastMessage.data.action} by ${lastMessage.data.user.login}`
  //         );
  //         break;
  //     }
  //   }
  // }, [lastMessage, repoId, queryClient]);

  // 变更列表操作栏
  const renderEditArea = (change: Change) => {
    return (
    <Space size="middle">
        <Popconfirm
            title={`是否立即部署到${activeEnvironment}环境？`}
            okText="是"
            cancelText="否"
            onConfirm={() => handleSubmitChange(change, true, activeEnvironment)}
            onCancel={() => handleSubmitChange(change, false, activeEnvironment)}
            >
            <Button 
                type="link" 
                size="small"
            >
                提交
            </Button>
        </Popconfirm>
        <Button 
            type="link" 
            size="small" 
            onClick={() => handleEditChange(change)}
            >
            编辑
        </Button>
        <Popconfirm
            title={
              <>
                  <div style={{ marginBottom: 8 }}>确定要删除这个变更吗？</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>同时删除远程分支：</span>
                  <Switch
                    size="small"
                    checked={deleteRemoteBranch}
                    onChange={setDeleteRemoteBranch}
                  />
                  </div>
              </>
            }
            okText="确定"
            cancelText="取消"
            onConfirm={() => handleDeleteChange(change)}
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
    )
  }
  

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
          onChange={setActiveEnvironment}
        >
          {repo?.environments.map(env => (
            <TabPane tab={`${env.name.toUpperCase()}环境`} key={env.name}>
              <EnvironmentCard env={env} repo={repo} />
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
        <ChangeList changes={notInDeployChanges!} renderEditArea={renderEditArea} />
      </div>
      {/* 操作变更的Modal */}
      <ChangeModal 
        visible={isChangeModalVisible} 
        change={currentChange!} 
        repoId={repoId!} 
        handleModalClose={handleModalClose}
        // callback={fetchChangeList}
      />
      <Drawer
        placement='top'
        open={drawerOpen}
      >
        <div id="subapp" style={{ width: 900, height: 1200 }}>
        </div>
      </Drawer>
      <div id="subapp" style={{ width: 900, height: 1200 }}>
      </div>
    </div>
  );
};

export default RepositoryDetail; 