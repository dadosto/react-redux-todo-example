import React from 'react';
import Constants from '../Constants.js';
import FilterLink from './FilterLink.js';

export default function FooterComp(props) {

  return (
    <div>
      <FilterLink
        filter={Constants.getAllVisibilityFilter}>
        All
      </FilterLink>
    
      <FilterLink
        filter={Constants.getActiveVisibilityFilter}>
        Active
      </FilterLink>
    
      <FilterLink
        filter={Constants.getCompletedVisibilityFilter}>
        Completed
      </FilterLink>
    </div>
  ); 
}