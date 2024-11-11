import React from 'react';
import { Button, Card, Flex, theme } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';

import {
    CodeFilled,
    ControlFilled,
    DeleteFilled,
    PlaySquareFilled
} from '@ant-design/icons';

const { Meta } = Card;

const ServerCard: React.FC = () => (
    <Card
        hoverable
        style={
            { width: 240 }
        }
        cover={
            <img alt="example" src="https://preview.qiantucdn.com/ing/17/59/26/83a58PIC8IRD7G9stmhk2_PIC2018.jpg%21w600_nowater"/>
        }
    >
        <Meta title="The Island" description="人数 : 10 / 255"></Meta>
        <ButtonGroup style={{ marginRight: "12px" }}>
            <Button icon={<PlaySquareFilled />} size={'middle'} ></Button>
            <Button icon={<CodeFilled />} size={'middle'} ></Button>
            <Button icon={<ControlFilled />} size={'middle'} ></Button>
            <Button icon={<DeleteFilled />} size={'middle'} ></Button>
        </ButtonGroup>
    </Card>
);

export default ServerCard;