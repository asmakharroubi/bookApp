import { ADD_TASK ,CHANGE_DONE, EDIT_TASK} from "../Constants/action-types";


export const addTask = (payload )=>{

    return {
      type: ADD_TASK,
      payload: payload,
    };

}

export const changeDone = (payload) => {
  return {
    type: CHANGE_DONE,
    payload: payload,
  };
};

export const editTask = (payload) => {
    console.log('act',payload)
  return {
    type: EDIT_TASK,
    payload: payload,
  };
};