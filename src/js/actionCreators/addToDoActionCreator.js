import Constants from '../Constants.js';
import {v4} from 'node-uuid';

const AddToDoItemAction = (text) => ({
  type: Constants.addToDoAction,
  text: text,
  id: v4()
});

export default AddToDoItemAction;