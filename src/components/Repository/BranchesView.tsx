import React from 'react';
import { Table, Tag, Space } from 'antd';
import { useQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { githubService } from '../../services/github';

const BranchesView: React.FC = () => {
  const { repoName } = useParams<{ repoName: string }>();
  const [searchParams] = useSearchParams();
  const repoId = searchParams.get('id');

  const { data: branches, isLoading } = useQuery(
    ['branches', repoId],
    () => githubService.getBranches(repoId!),
    {
      enabled: !!repoId,
    }
  );

  const columns = [
    {
      title: 'Branch Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Last Commit',
      dataIndex: 'commit',
      key: 'commit',
      render: (commit: any) => commit.sha.substring(0, 7),
    },
    {
      title: 'Protected',
      dataIndex: 'protected',
      key: 'protected',
      render: (protected_: boolean) => (
        <Tag color={protected_ ? 'green' : 'default'}>
          {protected_ ? 'Protected' : 'Not Protected'}
        </Tag>
      ),
    },
  ];

  return (
    <div>
      <h2>Repository Branches</h2>
      <Table
        columns={columns}
        dataSource={branches}
        loading={isLoading}
        rowKey="name"
      />
    </div>
  );
};

export default BranchesView; 