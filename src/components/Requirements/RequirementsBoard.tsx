import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, Row, Col } from 'antd';

const RequirementsBoard: React.FC = () => {
  const columns = ['To Do', 'In Progress', 'Done'];
  const mockData = {
    'To Do': [
      { id: 'REQ-002', title: 'CI/CD Pipeline', priority: 'High' },
      { id: 'REQ-003', title: 'Code Review Process', priority: 'Medium' },
    ],
    'In Progress': [
      { id: 'REQ-001', title: 'User Authentication', priority: 'High' },
    ],
    'Done': [
      { id: 'REQ-000', title: 'Project Setup', priority: 'High' },
    ],
  };

  const onDragEnd = (result: any) => {
    // Handle drag and drop logic here
  };

  return (
    <div>
      <h2>Requirements Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row gutter={16}>
          {columns.map(column => (
            <Col span={8} key={column}>
              <Card title={column}>
                <Droppable droppableId={column}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      style={{ minHeight: 500 }}
                    >
                      {mockData[column as keyof typeof mockData]?.map((item: { id: string; title: string; priority: string }, index: number) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <Card
                              size="small"
                              style={{ marginBottom: 8 }}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <p>{item.title}</p>
                              <p style={{ color: '#999' }}>{item.priority}</p>
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

export default RequirementsBoard; 