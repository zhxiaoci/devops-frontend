import { Space, Popconfirm, Button, Card, Badge, Steps, message } from "antd";
import { Environment, Repository } from "../../../types/repository";
import { Change } from "../../../types/workItem";
import { githubService } from '../../../services/github';
import { DeploymentUnitOutlined, CloseOutlined, InboxOutlined, LoadingOutlined } from '@ant-design/icons';
import { useQueryClient } from "react-query";
import ChangeList from "./ChangeList";
import { useEffect, useState } from "react";
import { useWebSocket } from "../../../contexts/WsContext";

type StatusProps = 'error'| 'wait' | 'process' | 'finish' | undefined

const statusMap = {
  [-1]: 'error',
  0: 'wait',
  1: 'process',
  2: 'finish'
}

const EnvironmentCard: React.FC<{ env: Environment, repo: Repository }> = ({ env, repo }) => {
    const queryClient = useQueryClient();
    const [currentStep, setCurrentStep] = useState<number>(env.step)
    const [currentStatus, setCurrentStatus] = useState<StatusProps | string>(statusMap[env.status as keyof typeof statusMap])
    const [deployDetails, setDeployDetails] = useState<string>()
    const { deployMsg } = useWebSocket()
    console.log(currentStep, currentStatus)
    useEffect(() => { 
      const { envName, data, timeStamp } = deployMsg
      if (env.name === envName) {
        data && setDeployDetails(data.msg)
        data && setCurrentStep(data.step)
        switch (data?.status) {
          case 1: {
            setCurrentStatus('process')
            break
          }
          case 2: {
            setCurrentStatus('finish')
            message.success('部署成功')
            break
          }
          case -1: {
            setCurrentStatus('error')
            break
          }
        }
      }
    }, [deployMsg])

    const handleDeploy = async (envId: number, repoId: number) => {
      message.info('部署开始')
      try {
        setCurrentStatus('process')

        setCurrentStep(0)
        await githubService.crateReleaseAndMerge(env.id)
        setCurrentStep(1)
  
        await githubService.dispatch({ envId, repoId });
        
      } catch (error) {
        setCurrentStatus('error')
      }
    }

    const handleStopDeploy = async () => {
      setCurrentStatus('wait')
    }

    const handleExitDeployArea = async (deployNow: boolean, environment: string, change: Change) => {
      if (!change) return;
  
      try {
        if (deployNow) {
          await githubService.deployChange(repo.githubId!, change.id.toString(), environment);
          message.success('开始部署变更');
        }
        await githubService.removeChangeFromPendingDeploy(repo.githubId!, change.id, environment);
        message.success('退出变更成功');

        // queryClient.invalidateQueries(['repository', repo.githubId.toString()]);
      } catch (error) {
        message.error('操作失败');
      }
    };
    
    // 部署区域的表格列定义
    const renderEditArea = (change: Change) => {
      return (
        <Popconfirm
          title="确定要移出部署区域吗？"
          okText="是"
          cancelText="否"
          onConfirm={() => handleExitDeployArea(false, env.name, change)}
        >
          <Button 
            size="small"
            icon={<CloseOutlined />}
            danger
          >
            移除
          </Button>
        </Popconfirm>
      )
    }

    return (
      <Card className="environment-card">
        <div className="environment-header">
          <Space>
            <DeploymentUnitOutlined />
            <span className="environment-name">{env.name.toUpperCase()}</span>
            <Badge
              status={
                currentStatus === 'finish' 
                  ? 'success' 
                  : currentStatus === 'process'
                    ? 'processing' 
                    : currentStatus === 'error'
                      ? 'error'
                      : 'default'
              }
              text={
                currentStatus === 'finish' 
                ? '部署成功' 
                : currentStatus === 'process'
                  ? '部署中' 
                  : currentStatus === 'error'
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
            {/* {selectedChange && (
              <Button 
                type="primary"
                icon={<DeploymentUnitOutlined />}
                onClick={() => handleExitDeployArea(true, env.name, selectedChange)}
              >
                部署变更
              </Button>
            )} */}
          </Space>
          <Button type="primary"  onClick={() => handleDeploy(env.id, env.repoId)} danger={currentStatus === 'process'}>
            {currentStatus === 'process' ? '停止部署' : '部署'}
          </Button>
        </div>
        <Steps
          direction="vertical"
          size="small"
          current={currentStep}
          status={currentStatus as StatusProps}
          items={[
            { 
              title: '代码检测', 
              description: '2024-12-21 19:12',
              icon: currentStep === 0 && currentStatus === 'process' ? <LoadingOutlined /> : null,
            },
            {
              title: '打包构建镜像',
              // status: 'process',
              description: '2024-12-21 19:12',
              icon: currentStep === 1 && currentStatus === 'process'? <LoadingOutlined /> : null,
            },
            {
              title: '代码合并',
              // description: '2024-12-21 19:12',
            },
          ]}
        />
        <div className="environment-content">
          {env.changes.length > 0 ? (
            <ChangeList changes={env.changes} renderEditArea={renderEditArea} />
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

  export default EnvironmentCard;