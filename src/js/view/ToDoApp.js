import React from 'react';
import Constants from '../Constants.js';
import VisibleToDoList from './VisibleToDoList.js';
import AddToDoItem from './AddToDoItem.js';
import FooterComp from './FooterComp.js';

export default function ToDoApp() {
  
  return (
    <div style={{margin: '30px'}}>
    
      <h2 style={{marginBottom: '20px', textDecoration: 'underline'}}>
        To Do
      </h2>
    
      <AddToDoItem />
    
      <VisibleToDoList />      

      <FooterComp />
    
    </div>
  );
}