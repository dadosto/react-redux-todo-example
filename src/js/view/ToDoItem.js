import React, {Component} from 'react';
import Constants from '../Constants.js';

class ToDoItem extends Component {
  
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  
  onClickHandler() {
    this.props.toggleToDo({
      type: Constants.toggleToDoAction,
      toDo: {
        id: this.props.id
      }
    });
  }
  
  render() {
    
    let toDoItemStyle = {
      color: this.props.completed ? '#766' : '#333',
      textDecoration: this.props.completed ? 'line-through' : 'none',
      margin: '10px'
    };
    
    return (
      <li style={toDoItemStyle} onClick={this.onClickHandler}>
        <h4>{this.props.text}</h4>
      </li>
    );
  }
}

export default ToDoItem;