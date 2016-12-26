import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import Constants from './Constants.js';
import ReducerTests from './tests/reducerTest.js';
import ToDo from './reducers/toDo.js';
import VisibilityFilter from './reducers/visibilityFilter.js';
import AddToDoItem from './view/AddToDoItem.js';
import ToDoApp from './view/ToDoApp.js';

ReducerTests();

const toDoApp = combineReducers({
  toDoItems: ToDo,
  visibilityFilter: VisibilityFilter
});

const store = createStore(toDoApp);

let initialToDoAction = {
  type: Constants.addToDoAction,
  toDo: {
    text: 'Eat',
    id: 0
  }
};

store.dispatch(initialToDoAction);

const showAction = (filter) => {
  return {
    type: Constants.visibilityFilterAction,
    filter: filter
  }
};

const render = () => {
  ReactDOM.render(
    <ToDoApp dispatch={store.dispatch} state={store.getState()} />,
	  document.getElementById('app')
  );
};

store.subscribe(render);
render();