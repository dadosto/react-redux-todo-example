import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import Constants from './Constants.js';
import ReducerTests from './tests/reducerTest.js';
import ToDo from './reducers/toDo.js';
import VisibilityFilter from './reducers/visibilityFilter.js';
//import toDoApp from './reducers/toDoApp.js';
import ToDoItems from './view/ToDoItems.js';

ReducerTests();

const toDoApp = combineReducers({
  toDoItems: ToDo,
  visibilityFilter: VisibilityFilter
});

const store = createStore(toDoApp);

let initialToDoAction = {
  type: Constants.addToDoAction,
  toDo: {
    text: 'Item1',
    id: 0
  }
}

store.dispatch(initialToDoAction);

console.log('Initial state: ', store.getState().toDoItems);

ReactDOM.render(
	<ToDoItems toDoItems={store.getState().toDoItems} />,
	document.getElementById('app')
);