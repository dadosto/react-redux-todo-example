import {createStore} from 'redux';
import {loadState, saveState} from './localStorage.js';
import throttle from 'lodash/throttle.js';
import ToDo from './reducers/toDo.js';
import VisibilityFilter from './reducers/visibilityFilter.js';
import {combineReducers} from 'redux';

const configureStore = () => {
  
  const toDoAppReducer = combineReducers({
    toDoItems: ToDo,
    visibilityFilter: VisibilityFilter
  });

  const persistedState = loadState();

  const store = createStore(toDoAppReducer, persistedState);

  // We don't want the saveState to be called all the time, because JSON.stringify is an expensive operation
  store.subscribe(throttle(() => {
    //saveState(store.getState()); // This would save the entire state - but we don't want to persist the filter
    saveState({
      toDoItems: store.getState().toDoItems
    });
  }), 1000);
  
  return store;
}

export default configureStore;