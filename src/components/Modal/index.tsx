import { ReactNode, useState } from 'react';
import ReactModal from 'react-modal';

interface PrevProps {
  isOpen: boolean;
}

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

export default function Modal({children, isOpen}: ModalProps){
const [modalStatus, setModalStatus] = useState(false)
  
  
  function componentDidUpdate(prevProps: PrevProps) {
    if (prevProps.isOpen !== isOpen) {
      setModalStatus(isOpen)
    }
  }

  function setIsOpen(){
    isOpen = !isOpen
  }

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
    );
}