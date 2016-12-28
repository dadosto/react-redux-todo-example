import React, {Component} from 'react';
import Constants from '../Constants.js';

export default function ToDoItem(props) {
  
  const {
    onClick,
    completed,
    text
  } = props;
  
  let toDoItemStyle = {
      color: completed ? '#766' : '#333',
      textDecoration: completed ? 'line-through' : 'none',
      margin: '10px'
    };
  
  return (
    <li onClick={onClick} style={toDoItemStyle} >
      {text}
    </li>
  );
}

ToDoItem.propTypes = {
  onClick: React.PropTypes.func,
  completed: React.PropTypes.bool,
  text: React.PropTypes.string.isRequired
}