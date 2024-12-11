import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, Row, Col, Avatar, Tag, Button } from 'antd';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { githubService } from '../../services/github';
import { WorkItem, WorkItemStatus, WorkItemStatusMap } from '../../types/workItem';
import { User } from '../../types/user';

interface AssigneeWithUser {
  user: User;
}

const WorkItemsBoard: React.FC = () => {
  const { repoName } = useParams<{ repoName: string }>();
  const [searchParams] = useSearchParams();
  const repoId = searchParams.get('id');

  const { data: workItems, isLoading } = useQuery(
    ['workItems', repoId],
    () => githubService.getWorkItems(),
    {
      enabled: !!repoId,
    }
  );

  const columns = [WorkItemStatus.Open, WorkItemStatus.InProgress, WorkItemStatus.Done];
  const columnTitles = {
    [WorkItemStatus.Open]: '待处理',
    [WorkItemStatus.InProgress]: '进行中',
    [WorkItemStatus.Done]: '已完成',
  };

  const groupedWorkItems = workItems?.reduce((acc: Record<string, WorkItem[]>, item: WorkItem) => {
    if (!acc[item.status]) {
      acc[item.status] = [];
    }
    acc[item.status].push(item);
    return acc;
  }, {});

  const queryClient = useQueryClient();

  const updateWorkItemMutation = useMutation(
    (data: { workItemId: string; status: WorkItemStatus }) =>
      githubService.updateWorkItem(data.workItemId, { status: data.status }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['workItems', repoId]);
      },
    }
  );

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const { draggableId, destination } = result;
    const newStatus = destination.droppableId;

    updateWorkItemMutation.mutate({
      workItemId: draggableId,
      status: newStatus,
    });
  };

  const renderWorkItem = (item: WorkItem) => (
    <Card className="work-item-card">
      <div className="work-item-header">
        <div className="work-item-title">{item.title}</div>
        <Tag color={WorkItemStatusMap[item.status].color}>
          {WorkItemStatusMap[item.status].text}
        </Tag>
      </div>
      <div className="work-item-meta">
        {item.assignees?.map(assignee => (
          <Avatar
            key={assignee.user.id}
            size="small"
            src={assignee.user.avatarUrl}
            style={{ marginRight: 4 }}
          />
        ))}
      </div>
      <div className="work-item-actions">
        <Button type="link" size="small" onClick={() => console.log(item)}>
          编辑
        </Button>
        <Button type="link" size="small" danger onClick={() => console.log(item)}>
          删除
        </Button>
      </div>
    </Card>
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="work-items-board">
      <h2>工作项看板</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row gutter={16}>
          {columns.map(column => (
            <Col span={8} key={column}>
              <Card title={columnTitles[column as keyof typeof columnTitles]}>
                <Droppable droppableId={column}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      style={{ minHeight: 500 }}
                    >
                      {groupedWorkItems?.[column]?.map((item: WorkItem, index: number) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <Card
                              size="small"
                              className="work-item-card"
                              style={{
                                marginBottom: 8,
                                ...provided.draggableProps.style,
                              }}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {renderWorkItem(item)}
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Card>
            </Col>
          ))}
        </Row>
      </DragDropContext>
    </div>
  );
};

export default WorkItemsBoard; 