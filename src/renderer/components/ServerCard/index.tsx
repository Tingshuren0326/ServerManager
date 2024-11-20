import React, { useState } from 'react';
import { Card } from 'antd';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import {
    PlayCircleFilled,
    CodeFilled,
    InteractionFilled,
    ProfileFilled,
    DeleteFilled
} from '@ant-design/icons';

type ServerItem = {
    id: number;
    title: string;
    des: string;
}

type ServerItemProps = {
    item: ServerItem;
};

const ServerCard: React.FC<ServerItemProps> = ({ item }) => {
    const { setNodeRef, attributes, listeners, transform, transition } =
        useSortable({
            id: item.id,
            transition: {
                duration: 500,
                easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            },
        });

    const styles = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={styles}
            className="draggable-item"
        >
            <Card
                hoverable
                bordered
                type="inner"
                style={{
                    width: 280,
                    height: 300
                }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <PlayCircleFilled key="server-start" />,
                    <CodeFilled key="server-command" />,
                    <InteractionFilled key="server-reset" />,
                    <ProfileFilled key="server-procile" />,
                    <DeleteFilled key="server-delete" />,
                ]}
            >
                <Card.Meta
                    title={item.title}
                    description={item.des}
                >
                </Card.Meta>
            </Card>
        </div>
    );
};

export default ServerCard;

