import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import React from 'react';

const { Meta } = Card;

export interface User {
  name: string;
  gender: string;
  age: number;
}

export interface NameLabelProps {
  user: User;
  onClick?: () => void;
}

const NameLabel: React.FC<NameLabelProps> = ({ user, onClick }) => {


  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src="https://via.placeholder.com/300" />}
      actions={[
        <Button type="primary" onClick={onClick}>
          View Details
        </Button>,
      ]}
    >
      <Meta
        avatar={<Avatar icon={<UserOutlined />} />}
        title={user.name}
        description={`Gender: ${user.gender}, Age: ${user.age}`}
      />
    </Card>
  );
};

export default NameLabel;
