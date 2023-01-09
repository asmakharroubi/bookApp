import { v4 as uuidv4 } from "uuid";
import { ADD_TASK ,CHANGE_DONE, EDIT_TASK} from "../Constants/action-types";



const initialState = {
  listTodo: [
    { id: uuidv4(), description: "I want to learn redux", isDone: false },
    { id: uuidv4(), description: "I want visit beb 7", isDone: true },
    { id: uuidv4(), description: "I want to play valorant", isDone: false },
    { id: uuidv4(), description: "I want to eat lablebi", isDone: false },
    { id: uuidv4(), description: "I want to learn react js", isDone: false },
  ],
};
function TodoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        listTodo: [
          ...state.listTodo,
          { id: uuidv4(), description: payload, isDone: false },
        ],
      };

    case CHANGE_DONE:
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    case EDIT_TASK:
      
      return {
        listTodo: state.listTodo.map((task)=>  task.id ===payload.id ?{...task, description:payload.edited }:task )
      }

    default:
      return state;
  }
}

export default TodoReducer;