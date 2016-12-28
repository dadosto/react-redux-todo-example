import Constants from '../Constants.js';

let nextToDoItemId = 0;

const AddToDoItemAction = (text) => {
  return {
    type: Constants.addToDoAction,
    toDo: {
      text: text,
      id: nextToDoItemId++
    }
  };
}

export default AddToDoItemAction;