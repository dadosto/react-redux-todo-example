import React from 'react';
import Constants from '../Constants.js';
import VisibleToDoList from './VisibleToDoList.js';
import AddToDoItem from './AddToDoItem.js';
import FooterComp from './FooterComp.js';

export default function ToDoApp({params}) {
  
  return (
    <div style={{margin: '30px'}}>
    
      <h2 style={{marginBottom: '20px', textDecoration: 'underline'}}>
        To Do
      </h2>
    
      <AddToDoItem />
    
      <VisibleToDoList visibilityFilter={params.filter || Constants.getAllVisibilityFilter} />  

      <FooterComp />
    
    </div>
  );
}

// Route provided params.filter. In case params.filter is empty, we pass 'all' as a fallback