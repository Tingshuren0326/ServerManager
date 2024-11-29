import { useState } from 'react'
import { Row, Col } from 'antd'

import { DndContext, DragEndEvent, DragMoveEvent, useSensors, useSensor, MouseSensor } from '@dnd-kit/core'

import { restrictToParentElement } from '@dnd-kit/modifiers'
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'

import './index.css'
import ServerCard from '@renderer/components/ServerCard'
import ServerConfig from '@renderer/components/ServerConfig'

import TheIslandCard from '@renderer/common/images/Ark/the_island_card.jpg'

import ScorchedEarthCard from '@renderer/common/images/Ark/scorched_earth_card.jpg'

import TheCenterCard from '@renderer/common/images/Ark/the_center_card.jpg'

import AberrationCard from '@renderer/common/images/Ark/aberration_card.jpg'

import ExtinctionCard from '@renderer/common/images/Ark/extinction_card.jpg'

type ServerItem = {
  id: number
  title: string
  cover: string
  des: string
}

const Server: React.FC = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Riru TheIs land PVE',
      cover: TheIslandCard,
      des: '0 / 128'
    },
    {
      id: 2,
      title: 'Riru Scorched Earth PVE',
      cover: ScorchedEarthCard,
      des: '0 / 128'
    },
    {
      id: 3,
      title: 'Riru The Center PVE',
      cover: TheCenterCard,
      des: '0 / 128'
    },
    {
      id: 4,
      title: 'Riru Aberration PVE',
      cover: AberrationCard,
      des: '0 / 128'
    },
    {
      id: 5,
      title: 'Riru Extinction PVE',
      cover: ExtinctionCard,
      des: '0 / 128'
    }, {
      id: 6,
      title: 'Riru TheIs land PVP',
      cover: TheIslandCard,
      des: '0 / 128'
    },
    {
      id: 7,
      title: 'Riru Scorched Earth PVP',
      cover: ScorchedEarthCard,
      des: '0 / 128'
    },
    {
      id: 8,
      title: 'Riru The Center PVP',
      cover: TheCenterCard,
      des: '0 / 128'
    },
    {
      id: 9,
      title: 'Riru Aberration PVP',
      cover: AberrationCard,
      des: '0 / 128'
    },
    {
      id: 10,
      title: 'Riru Extinction PVP',
      cover: ExtinctionCard,
      des: '0 / 128'
    }
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
        <Row align='top' justify={'space-evenly'}>
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
