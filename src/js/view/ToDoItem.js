import React, {Component} from 'react';

class ToDoItem extends Component {
  render() {
    let toDoItemStyle = {
      color: '#333',
      margin: '10px'
    }
    if (this.props.completed) {
      toDoItemStyle = {
        color: '#a99',
        textDecorationLine: 'line-through'
      }
    }
    return (
      <li style={toDoItemStyle} onClick={this.props.toggleToDo}>
        {this.props.text}
      </li>
    );
  }
}

export default ToDoItem;