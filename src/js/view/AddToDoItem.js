import React, {Component} from 'react';
import Constants from '../Constants.js';
import {connect} from 'react-redux';
import AddToDoItemAction from '../actionCreators/addToDoActionCreator.js';

let AddToDoItem = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(AddToDoItemAction(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
AddToDoItem = connect()(AddToDoItem);

export default AddToDoItem;