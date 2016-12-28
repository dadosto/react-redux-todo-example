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

ReactDOM.render(
  <Provider store={createStore(toDoAppReducer)}>
    <ToDoApp />
  </Provider>,
  document.getElementById('app')
);