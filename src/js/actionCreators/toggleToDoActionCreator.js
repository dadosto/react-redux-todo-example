import Constants from '../Constants.js';


const ToggleToDoAction = (id) => {
  return { 
    type: Constants.toggleToDoAction,
    toDo: {
      id: id
    }
  };
}

export default ToggleToDoAction;