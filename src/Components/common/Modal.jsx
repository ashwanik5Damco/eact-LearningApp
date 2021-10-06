
import React, { useState ,useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal } from 'react-bootstrap';

export default function Example({show, userDetails , handleOnChange , handleOnClose}) {
  // const { userDetails,show, handleOnChange } = this.props;
  const name = userDetails.first_name;
  const [showModal, setShow] = useState(show);
  const [first_name, handleOnChange1] = useState(userDetails.first_name);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  useEffect(() => {
      setShow(show);
  
});

  return (
    <>
      <Modal
        show={show}
        onHide =  {(e) =>{
          e.preventDefault();
          handleOnClose()}}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username : {userDetails.first_name}</Form.Label>
          <Form.Control
            autoFocus
            type="text" 
            value={first_name}
            onChange={(e) =>{
              e.preventDefault();
             handleOnChange(e.target.value , userDetails.id)}}
          />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) =>{
          e.preventDefault();
          handleOnClose()}}>
            Close
          </Button>
          <Button variant="success" onClick={(e) =>{
          e.preventDefault();
          handleOnClose()}}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

