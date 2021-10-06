
import React, { useState ,useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal } from 'react-bootstrap';

export default function Example({show, userDetails , handleOnChange}) {
  // const { userDetails,show, handleOnChange } = this.props;
  const name = userDetails.first_name;
  const [showModal, setShow] = useState(show);
  const [first_name, handleOnChange1] = useState(userDetails.first_name);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  useEffect(() => {
    console.log("show" , show)
    // setShow(show);
}, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      {show}
      </Button>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text" 
            value={name}
            onChange={(e) =>{
              e.preventDefault();
             handleOnChange(e.target.value , userDetails.id)}}
          />
        </Form.Group>
        </Form>
        {/* <div className="modal-body">
                <div className="row">
                  <input
                    name="login"
                    className="form form-control"
                    value={userDetails.first_name}
                    onChange={(event) => {
                      handleOnChange(event.target.value);
                    }}
                  />
                </div>
              </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

