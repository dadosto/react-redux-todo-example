import React from 'react';
import Constants from '../Constants.js';
import ToDoItems from './ToDoItems.js';
import AddToDoItem from './AddToDoItem.js';
import VisibilityFilterComp from './VisibilityFilterComp.js';

class FooterCamp extends React.Component {
  
  render() {
    return (
      <div>
      
        <VisibilityFilterComp 
          currentFilter={this.props.currentVisibilityFilter} 
          setFilter={this.props.onFilterClick} 
          filter={Constants.getAllVisibilityFilter} 
          text="All"/>
      
        <VisibilityFilterComp 
          currentFilter={this.props.currentVisibilityFilter} 
          setFilter={this.props.onFilterClick} 
          filter={Constants.getActiveVisibilityFilter} 
          text="Active"/>
      
        <VisibilityFilterComp 
          currentFilter={this.props.currentVisibilityFilter} 
          setFilter={this.props.onFilterClick} 
          filter={Constants.getCompletedVisibilityFilter} 
          text="Completed"/>
      
      </div>
    );
  }
}

export default FooterCamp;