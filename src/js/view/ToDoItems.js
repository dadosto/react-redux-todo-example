import React, {Component} from 'react';
import ToDoItem from './ToDoItem.js';

class ToDoItems extends Component {
  
  render() {
    
    let rows = [];
    
    this.props.toDoItems.forEach((item) => {
      rows.push((
        <ToDoItem 
          completed={item.completed} 
          text={item.text} 
          key={item.id}
          id={item.id}
          toggleToDo={this.props.toggleToDoHandler}/>
      ));
    });
    
    return (
      <ul>
        { rows }
      </ul>
    );
  }
}

export default ToDoItems;