import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export function useModal(inits) {

  const {modalTitle, modalBody, yesBtn, yesBtnHandler, noBtn} = inits;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const modalRender = () => {
    return (
      <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
          <ModalBody>{modalBody}</ModalBody>
          <ModalFooter>
            {yesBtn && (
              <Button color="primary" onClick={yesBtnHandler}>
                {yesBtn}
              </Button>
            )}
            {noBtn && (
              <Button color="danger" onClick={toggle}>
                {noBtn}
              </Button>
            )}
          </ModalFooter>
        </Modal>
      </>
    );
  };

  return {
      modal,
      setModal,
      modalRender
  }
}

