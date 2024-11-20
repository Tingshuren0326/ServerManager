import React, { useState } from 'react';
import { Modal, Button } from 'antd';
 
// 自定义Hook用于管理弹窗状态
const useModal = () => {
  const [visible, setVisible] = useState(false);
 
  const showModal = () => {
    setVisible(true);
  };
 
  const hideModal = () => {
    setVisible(false);
  };
 
  return { visible, showModal, hideModal };
};
 
const App = () => {
  const { visible, showModal, hideModal } = useModal();
 
  return (
    <>
      <Button type="primary" onClick={showModal}>
        打开弹窗
      </Button>
      <Modal
        title="模态框"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
      >
        这是一个弹窗示例。
      </Modal>
    </>
  );
};
 
export default App;