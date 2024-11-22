import React, { MouseEventHandler } from 'react'
import { Button, Card } from 'antd'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import {
  PlayCircleFilled,
  CodeFilled,
  InteractionFilled,
  ProfileFilled,
  DeleteFilled
} from '@ant-design/icons'

type ServerItem = {
  id: number
  title: string
  des: string
}

type ServerItemProps = {
  item: ServerItem
  onProfileClick: Function;
}

const ServerCard: React.FC<ServerItemProps> = ({ item, onProfileClick }) => {
  const { setNodeRef, attributes, listeners, transform, transition } = useSortable({
    id: item.id,
    transition: {
      duration: 500,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
    }
  })

  const styles = {
    width: 280,
    height: 300,
    transform: CSS.Transform.toString(transform),
    transition
  }

  const onStartActionClick = () => {
    console.log('onStartActionClick')
  }

  const onCommandActionClick = () => {
    console.log('onCommandActionClick')
  }

  const onResetActionClick = () => {
    console.log('onResetActionClick')
  }

  const onProfileActionClick = () => {
    onProfileClick(item);
  }


  const onDeleteActionClick = () => {
    console.log('onDeleteActionClick')
  }

  const onInfoActionClick = () => {
    console.log('onInfoActionClick')
  }

  return (
    <Card
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={styles}
      className="draggable-item"
      hoverable
      bordered
      type="inner"
      cover={
        <img
          onClick={onInfoActionClick}
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <PlayCircleFilled onClick={onStartActionClick} key="server-start" />,
        <CodeFilled onClick={onCommandActionClick} key="server-command" />,
        <InteractionFilled onClick={onResetActionClick} key="server-reset" />,
        <ProfileFilled onClick={onProfileActionClick} key="server-procile" />,
        <DeleteFilled onClick={onDeleteActionClick} key="server-delete" />
      ]}
    >
      <Card.Meta title={item.title} description={item.des}></Card.Meta>
    </Card>
  )
}

export default ServerCard
