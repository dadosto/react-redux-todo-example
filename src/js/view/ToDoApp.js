import React from 'react';
import Constants from '../Constants.js';
import ToDoItems from './ToDoItems.js';
import AddToDoItem from './AddToDoItem.js';
import VisibilityFilterComp from './VisibilityFilterComp.js';
import FooterComp from './FooterComp.js';

class ToDoApp extends React.Component {
  
  render() {
    return (
      <div style={{margin: '30px'}}>
        <h2 style={{marginBottom: '20px', textDecoration: 'underline'}}>To Do</h2>
        <ToDoItems
          visibilityFilter={this.props.state.visibilityFilter}
          toDoItems={this.props.state.toDoItems} 
          toggleToDoHandler={this.props.dispatch}/>
        <br/>
        <AddToDoItem 
          nextToDoItem={this.props.state.toDoItems.length + 1}
          addToDoItem={this.props.dispatch} />
        <br/>
        <FooterComp 
          currentVisibilityFilter={this.props.state.visibilityFilter} 
          onFilterClick={this.props.dispatch} />
      </div>
    );
  }
}

export default ToDoApp;