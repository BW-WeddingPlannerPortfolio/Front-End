import React, {useState} from "react";
import JoinNow from "./JoinNow";
//import {NavLink, useHistory} from "react-router-dom";
import {Modal, Button} from "react-bootstrap";


function JoinNowModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Submit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Join Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <JoinNow/>
              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}
  
// render (<JoinNowModal/>); 
  export default JoinNowModal;