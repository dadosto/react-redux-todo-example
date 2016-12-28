import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import Constants from './Constants.js';
import ReducerTests from './tests/reducerTest.js';
import ToDo from './reducers/toDo.js';
import VisibilityFilter from './reducers/visibilityFilter.js';
import ToDoApp from './view/ToDoApp.js';

ReducerTests();

const toDoAppReducer = combineReducers({
  toDoItems: ToDo,
  visibilityFilter: VisibilityFilter
});

const persistedState = {
  toDoItems: [
    {
      id: '0',
      text: 'Eat and sleep',
      completed: false
    }
  ]
}

const store = createStore(toDoAppReducer, persistedState);

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById('app')
);