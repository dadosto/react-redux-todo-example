import React, {Component} from 'react';
import ToDoItem from './ToDoItem.js';
import Constants from '../Constants.js';

class ToDoItems extends Component {
  
  visibleToDoItems(toDoItems, visibilityFilter) {
    switch (visibilityFilter) {
      case Constants.getAllVisibilityFilter:
        return toDoItems;
      case Constants.getActiveVisibilityFilter:
        return toDoItems.filter((item) => {
          return !item.completed;
        });
      case Constants.getCompletedVisibilityFilter:
        return toDoItems.filter((item) => {
          return item.completed;
        });
    }
  }
  
  render() {
    
    const visibileToDoItems = this.visibleToDoItems(this.props.toDoItems, this.props.visibilityFilter);
    
    let rows = [];
    
    visibileToDoItems.forEach((item) => {
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