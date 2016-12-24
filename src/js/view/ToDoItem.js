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
      color: '#333',
      margin: '10px'
    }
    if (this.props.completed) {
      toDoItemStyle = {
        color: '#766',
        textDecoration: 'line-through',
        margin: '10px'
      }
    }
    console.log('Props = ', this.props);
    return (
      <li style={toDoItemStyle} onClick={this.onClickHandler}>
        {this.props.text}
      </li>
    );
  }
}

export default ToDoItem;