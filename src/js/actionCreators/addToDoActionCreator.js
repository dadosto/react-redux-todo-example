import Constants from '../Constants.js';

const AddToDoItemAction = (text) => ({
  type: Constants.addToDoAction,
  text: text,
  id: new Date().getTime()
});

export default AddToDoItemAction;