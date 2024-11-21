import React, { useState } from 'react'
import { Modal, Button } from 'antd'

// 自定义Hook用于管理弹窗状态
const useModal = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const hideModal = () => {
    setVisible(false)
  }

  return { visible, showModal, hideModal }
}

const AppConfig = () => {
  const { visible, showModal, hideModal } = useModal()

  return (
    <>
      <Modal title="选择程序数据目录" open={visible} onOk={hideModal} onCancel={hideModal}>
        这是一个弹窗示例。
      </Modal>
    </>
  )
}

export default AppConfig
