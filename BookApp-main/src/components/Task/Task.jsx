import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Task.css";
import { useDispatch } from "react-redux";
import { changeDone, editTask } from "../../Redux/Actions/action";





const Task = ({ taskdetails, key }) => {

    const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edited, setEdited] = useState("");


  //Buttons fuctions 
const hadnleDone=()=>{
  dispatch(changeDone(taskdetails.id));
}
const hadnleEdit=(e)=>{
 setEdited(e.target.value)
}
const hadnleSave = (e) => {
 
  dispatch( editTask({id:taskdetails.id,edited}));
  handleClose()
};



  return (
    <div className="task">
      <h1>{taskdetails.description}</h1>
      {taskdetails.isDone ? (
        <Button variant="outline-danger" onClick={hadnleDone}>
          Undo
        </Button>
      ) : (
        <Button variant="outline-success" onClick={hadnleDone}>
          done
        </Button>
      )}
      <Button variant="outline-warning" onClick={handleShow}>
        Edit
      </Button>{" "}
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-container"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="task"
            placeholder="Edit task"
            defaultValue={taskdetails.description}
            onChange={hadnleEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={hadnleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task;
