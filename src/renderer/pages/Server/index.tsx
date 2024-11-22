import { useState } from 'react'
import { Row } from 'antd'

import { DndContext, DragEndEvent, DragMoveEvent, useSensors, useSensor, MouseSensor } from '@dnd-kit/core'

import { restrictToParentElement } from '@dnd-kit/modifiers'
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'

import './index.css'
import ServerCard from '@renderer/components/ServerCard'
import ServerConfig from '@renderer/components/ServerConfig'

type ServerItem = {
  id: number
  title: string
  des: string
}

const Server: React.FC = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Server 1', des: 'test 1' },
    { id: 2, title: 'Server 2', des: 'test 2' },
    { id: 3, title: 'Server 3', des: 'test 3' },
    { id: 4, title: 'Server 4', des: 'test 4' },
    { id: 5, title: 'Server 5', des: 'test 5' },
    { id: 6, title: 'Server 6', des: 'test 6' },
    { id: 7, title: 'Server 7', des: 'test 7' },
    { id: 8, title: 'Server 8', des: 'test 8' }
  ])

  const [showServerCard, setShowServerCard] = useState<boolean>(false)
  const [currentServer, setCurrentServer] = useState<ServerItem>()

  const getMoveIndex = (array: ServerItem[], dragItem: DragMoveEvent) => {
    const { active, over } = dragItem
    const activeIndex = array.findIndex((item) => item.id === active.id)
    const overIndex = array.findIndex((item) => item.id === over?.id)
    return {
      activeIndex: activeIndex !== -1 ? activeIndex : 0,
      overIndex: overIndex !== -1 ? overIndex : activeIndex
    }
  }

  const dragEndEvent = (dragItem: DragEndEvent) => {
    const { active, over } = dragItem

    if (!active || !over) return

    const moveDataList = [...cards]
    const { activeIndex, overIndex } = getMoveIndex(moveDataList, dragItem)

    if (activeIndex !== overIndex) {
      const newDataList = arrayMove(moveDataList, activeIndex, overIndex)
      setCards(newDataList)
    }
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5
      }
    })
  )

  const onServerCardClick = (item: ServerItem) => {
    console.log('onServerCardClick :' + item.id)
    setCurrentServer(item)
    setShowServerCard(true);
  }


  return (
    <DndContext
      sensors={sensors}
      onDragEnd={dragEndEvent}
      modifiers={[restrictToParentElement]}
    >
      {<ServerConfig
        onOpenChage={setShowServerCard}
        drawShow={showServerCard}
        item={currentServer as ServerItem}
      />}
      <SortableContext
        items={cards.map((item) => item.id)}
        strategy={rectSortingStrategy}
      >
        <Row gutter={[24, 32]}>
          <div className="drag-container">
            {cards.map((item) => (
              <ServerCard key={item.id} item={item} onProfileClick={() => onServerCardClick(item)} />
            ))}
          </div>
        </Row>
      </SortableContext>
    </DndContext>
  )
}

export default Server
