import { Avatar, Space, Table, Tag } from "antd"
import { BranchesOutlined } from '@ant-design/icons';
import { User } from "../../../types/user";
import { WorkItem, Change } from "../../../types/workItem";
import type React from 'react';

const ChangeList: React.FC<{ 
    changes: Change[], 
    renderEditArea?: (change: Change) => React.ReactNode
}> = ({ changes, renderEditArea = () => null }) => {

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
            title: '负责人',
            dataIndex: 'manager',
            key: 'manager',
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
            fixed: 'right' as const,
            render: (_: any, record: Change) => (
                renderEditArea(record)
            )
        }
    ];


    return (
        <Table 
            columns={changeColumns} 
            dataSource={changes} 
            rowKey="id"
            pagination={{ pageSize: 10 }}
            scroll={{ x: 'max-content' }}
        />
    )
}

export default ChangeList
