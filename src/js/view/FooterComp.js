import React from 'react';
import Constants from '../Constants.js';
import VisibilityFilterComp from './VisibilityFilterComp.js';

export default function FooterComp(props) {

  return (
    <div>
      <VisibilityFilterComp
        filter={Constants.getAllVisibilityFilter}>
        "All"
      </VisibilityFilterComp>
    
      <VisibilityFilterComp
        filter={Constants.getActiveVisibilityFilter}>
        "Active"
      </VisibilityFilterComp>
    
      <VisibilityFilterComp
        filter={Constants.getCompletedVisibilityFilter}>
        "Completed"
      </VisibilityFilterComp>
    </div>
  ); 
}