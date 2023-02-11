import { Modal } from 'antd';

function BtnModal({visible, onCancel, onOk}){
  return (
    <>
      <Modal
        title="Do you want to switch to another form?"
        centered
        open={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
      <p>You will lose any text that you have written or received from the ChatGPT bot.</p>
      </Modal>
    </>
  );
};

export default BtnModal;