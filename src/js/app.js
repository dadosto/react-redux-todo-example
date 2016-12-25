import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import Constants from './Constants.js';
import ReducerTests from './tests/reducerTest.js';
import ToDo from './reducers/toDo.js';
import VisibilityFilter from './reducers/visibilityFilter.js';
import ToDoItems from './view/ToDoItems.js';
import AddToDoItem from './view/AddToDoItem.js';
import VisibilityFilterComp from './view/VisibilityFilterComp.js';

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
  
    <div style={{margin: '30px'}}>
      <h2 style={{marginBottom: '20px', textDecoration: 'underline'}}>To Do</h2>
      <ToDoItems
        visibilityFilter={store.getState().visibilityFilter}
        toDoItems={store.getState().toDoItems} 
        toggleToDoHandler={store.dispatch}/>
      <br/>
      <AddToDoItem 
        nextToDoItem={store.getState().toDoItems.length + 1}
        addToDoItem={store.dispatch} />
      <br/>
      <VisibilityFilterComp currentFilter={store.getState().visibilityFilter} filter={Constants.getAllVisibilityFilter} setFilter={store.dispatch} text="All"/>
      <VisibilityFilterComp currentFilter={store.getState().visibilityFilter} filter={Constants.getActiveVisibilityFilter} setFilter={store.dispatch} text="Active"/>
      <VisibilityFilterComp currentFilter={store.getState().visibilityFilter} filter={Constants.getCompletedVisibilityFilter} setFilter={store.dispatch} text="Completed"/>
    </div>,
    
	  document.getElementById('app')
  );
};

store.subscribe(render);
render();