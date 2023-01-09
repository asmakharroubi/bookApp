import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import "./ListTask.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeDone } from "../../Redux/Actions/action";



const ListTask = () => {
  const dispatch =useDispatch()
  const toDoList = useSelector((state) => state.TodoReducer.listTodo);

  const [list, setList] = useState([]);

  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);

  const handleList = () => {
    if (done === true) {
      setList(list.filter((task) => task.isDone === true));
    } else if (notDone === true) {
      setList(list.filter((task) => task.isDone === false));
    }
  };
  console.log(list);
  
  useEffect(() => {
    setList(toDoList);
    handleList();
  }, [done, notDone, toDoList]);

  const handleDone = () => {
    setDone(true);
    setNotDone(false)
  };
  const handleNotDone = () => {
    setDone(false);
    setNotDone(true);
  };

    const handleReset = () => {
      setDone(false);
      setNotDone(false);
      dispatch(changeDone());
    };

  return (
    <div>
      
      <div className="filterbtn">
        <Button variant="success" onClick={handleDone}>
          {" "}
          filter by done{" "}
        </Button>
        <Button variant="danger" onClick={handleNotDone}>
          {" "}
          filter by not done{" "}
        </Button>
        <Button variant="info" onClick={handleReset}> Reset</Button>
      </div>
      <div className="list-task">
        {list.map((taskdetails, key) => (
          <Task taskdetails={taskdetails} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
