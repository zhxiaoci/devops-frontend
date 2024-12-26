import { Modal, Input, Select, Space, Avatar, Button, Form, message } from "antd";
import { User } from "../../../types/user";
import { Change, WorkItem } from "../../../types/workItem";
import { githubService } from "../../../services/github";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { Branch } from "../../../types/repository";

const ChangeModal: React.FC<{
    visible: boolean;
    repoId: string;
    change?: Change;
    callback?: () => void;
    handleModalClose: () => void;
}> = ({ visible, repoId, change, callback, handleModalClose }) => {

    const [changeForm] = Form.useForm();
    const [workItemList, setWorkItemList] = useState<WorkItem[]>()
    const [orgMembers, setOrgMembers] = useState<User[]>()
    const [branchType, setBranchType] = useState<'existing' | 'new'>('existing');
    const [branches, setBranches] = useState<Branch[]>()
    const [branchesLoading, setBranchesLoading] = useState<boolean>(false)
    const queryClient = useQueryClient();

    useEffect(() => {
        if (visible) {
            fetchWrokItems()
        }
        if (change?.id) {
            fetchOrgMembers()
        }
    }, [visible])

    const fetchBranches = async () => {
        setBranchesLoading(true)
        const branches = await githubService.getBranches(repoId!)
        setBranchesLoading(false)
        setBranches(branches)
    }

    const fetchWrokItems = async () => {
        const workItems = await githubService.getWorkItems()
        setWorkItemList(workItems)
    }

    const fetchOrgMembers = async () => {
        const orgMembers = await githubService.getOrganizationMembers()
        setOrgMembers(orgMembers)
    }


    const handleCheckSelect = (value: 'existing' | 'new') => {
        if (value === 'existing') {
            fetchBranches()
        }
        setBranchType(value)
    }

    const handleFormSubmit = async (values: any) => {
        try {
          if (change) {
            if (Object.values(values).reduce((pre, cur) => pre || cur)) {
                // 编辑
                await githubService.updateChange(change.id.toString(), {
                    title: values.title,
                    description: values.description,
                    workItemId: values.workItemId,
                    managerId: values.managerId,
                });
                message.success('变更已更新');
            }                     
          } else {
            // 新建
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
    
            handleModalClose()
            changeForm.resetFields();
            callback && callback()
        } catch (error) {
          message.error(change?.id ? '更新失败' : '创建失败');
        }
      };


    return (
        <Modal
            title={change?.id ? "编辑变更" : "新建变更"}
            open={visible}
            onCancel={handleModalClose}
            footer={null}
            width={600}
            centered
        >
            <Form form={changeForm} onFinish={handleFormSubmit} layout="vertical">
                <Form.Item 
                    name="title" 
                    label="变更内容" 
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
                    {workItemList?.map((item: WorkItem) => (
                        <Select.Option key={item.id} value={item.id}>
                        {item.title}
                        </Select.Option>
                    ))}
                    </Select>
                </Form.Item>

                {change?.id ? (
                    <Form.Item
                        name="managerId"
                        label="负责人"
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
                        <Select onChange={handleCheckSelect}>
                        <Select.Option value="existing">使用已有分支</Select.Option>
                        <Select.Option value="new">创建新分支</Select.Option>
                        </Select>
                    </Form.Item>
                    {branchType === 'existing' ? (
                        <Form.Item name="branch" label="选择分支" rules={[{ required: true }]}>
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
                <Form.Item style={{ textAlign: 'right'}}>
                    <Space>
                    <Button onClick={handleModalClose}>取消</Button>
                    <Button type="primary" htmlType="submit">
                        {change?.id ? '保存' : '创建'}
                    </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ChangeModal