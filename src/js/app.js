import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import Constants from './Constants.js';
import ReducerTests from './tests/reducerTest.js';
import ToDo from './reducers/toDo.js';
import VisibilityFilter from './reducers/visibilityFilter.js';
//import toDoApp from './reducers/toDoApp.js';
import ToDoItems from './view/ToDoItems.js';
import AddToDoItem from './view/AddToDoItem.js';

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
}

store.dispatch(initialToDoAction);

const render = () => {
  ReactDOM.render(
  
    <div style={{margin: '30px'}}>
      <h2>To Do</h2>
      <AddToDoItem 
        nextToDoItem={store.getState().toDoItems.length + 1}
        addToDoItem={store.dispatch} />
      <ToDoItems 
        toDoItems={store.getState().toDoItems} 
        toggleToDoHandler={store.dispatch}/>
    </div>,
    
	  document.getElementById('app')
  );
};

store.subscribe(render);
render();