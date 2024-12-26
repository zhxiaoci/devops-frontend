import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Statistic, List, Tag, Avatar, Space, Progress } from 'antd';
import { useGithubRepositories } from '../../hooks/useGithubRepositories';
import {
  StarOutlined,
  ForkOutlined,
  BranchesOutlined,
  PullRequestOutlined,
} from '@ant-design/icons';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { data: repos, isLoading } = useGithubRepositories();

  const stats = {
    totalRepos: repos?.length || 0,
    totalStars: repos?.reduce((acc: any, repo: { stargazers_count: any; }) => acc + repo.stargazers_count, 0) || 0,
    totalForks: repos?.reduce((acc: any, repo: { forks_count: any; }) => acc + repo.forks_count, 0) || 0,
  };

  const recentActivities = [
    { type: 'push', repo: 'github-devops', branch: 'main', user: 'John Doe', time: '2 hours ago' },
    { type: 'pr', repo: 'github-devops', number: '#123', user: 'Jane Smith', time: '5 hours ago' },
    { type: 'issue', repo: 'github-devops', title: 'Bug fix', user: 'Mike Johnson', time: '1 day ago' },
  ];

  return (
    <div className="card-container">
      <div className="page-header">
        <h2 className="page-title">Dashboard</h2>
      </div>

      {/* Statistics Cards */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false}>
            <Statistic
              title="Total Repositories"
              value={stats.totalRepos}
              prefix={<BranchesOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false}>
            <Statistic
              title="Total Stars"
              value={stats.totalStars}
              prefix={<StarOutlined style={{ color: '#faad14' }} />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false}>
            <Statistic
              title="Total Forks"
              value={stats.totalForks}
              prefix={<ForkOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false}>
            <Statistic
              title="Open PRs"
              value={5}
              prefix={<PullRequestOutlined style={{ color: '#52c41a' }} />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} lg={16}>
          <Card
            title="Popular Repositories"
            bordered={false}
            className="dashboard-card"
          >
            <List
              dataSource={repos?.slice(0, 5)}
              loading={isLoading}
              renderItem={(repo: any) => (
                <List.Item
                  className="repository-item"
                  actions={[
                    <Space>
                      <StarOutlined style={{ color: '#faad14' }} />
                      {repo.stargazers_count}
                    </Space>,
                    <Space>
                      <ForkOutlined />
                      {repo.forks_count}
                    </Space>,
                  ]}
                  onClick={() => navigate(`/repository/${repo.name}?id=${repo.githubId}`)}
                >
                  <List.Item.Meta
                    title={<span className="repo-name">{repo.name}</span>}
                    description={repo.description}
                  />
                  <Tag color="blue">{repo.language}</Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            title="Recent Activities"
            bordered={false}
            className="dashboard-card"
          >
            <List
              dataSource={recentActivities}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://github.com/${item.user}.png`} />}
                    title={
                      <Space>
                        <span>{item.user}</span>
                        {item.type === 'push' && <Tag color="green">Push</Tag>}
                        {item.type === 'pr' && <Tag color="blue">PR {item.number}</Tag>}
                        {item.type === 'issue' && <Tag color="gold">Issue</Tag>}
                      </Space>
                    }
                    description={
                      <Space direction="vertical" size={0}>
                        <span>{item.repo} • {item.branch || item.title}</span>
                        <small style={{ color: '#8c8c8c' }}>{item.time}</small>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* Project Progress */}
      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col span={24}>
          <Card title="Project Progress" bordered={false} className="dashboard-card">
            <Row gutter={[32, 16]}>
              <Col xs={24} sm={8}>
                <Statistic
                  title="Code Review"
                  value={90}
                  suffix="%"
                  prefix={<Progress type="circle" percent={90} width={50} />}
                />
              </Col>
              <Col xs={24} sm={8}>
                <Statistic
                  title="Issues Resolved"
                  value={75}
                  suffix="%"
                  prefix={<Progress type="circle" percent={75} width={50} />}
                />
              </Col>
              <Col xs={24} sm={8}>
                <Statistic
                  title="Test Coverage"
                  value={88}
                  suffix="%"
                  prefix={<Progress type="circle" percent={88} width={50} />}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard; 