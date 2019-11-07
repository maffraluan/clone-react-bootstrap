import React, { useState, useEffect } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

function ModalAnimation() {
    const [show, setShow] = useState(false);

   // const spinner =  <Spinner animation="border" />;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Click To Check
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


export default ModalAnimation
