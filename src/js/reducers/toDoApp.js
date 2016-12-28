import Constants from '../Constants.js';
import todos from './toDo.js';
import visibilityFilter from './visibilityFilter.js';

// Not used, just as an example of a 'combineReducers' from scratch
const toDoApp = (state = {}, action) => {
  
  return {
    toDoItems: todos(state.toDoItems, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
};

export default toDoApp;