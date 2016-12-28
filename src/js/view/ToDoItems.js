import React, {Component} from 'react';
import ToDoItem from './ToDoItem.js';
import Constants from '../Constants.js';

export default function ToDoItems(props) {
  
  const {
    toDoItems,
    onToDoItemClick
  } = props;
  
  return (
    <ul>
      {toDoItems.map(toDo => 
        <ToDoItem 
          key={toDo.id}
          {...toDo} // it spreads the toDo properties, so that they end up as props on the toDoItem component
          onClick={() => onToDoItemClick(toDo.id)}
        />
      )}
    </ul>
  );
}