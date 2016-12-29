import ToDoApp from './ToDoApp.js';
import {Provider} from 'react-redux';
import React, {Component} from 'react';

const Root = ({store}) => (
  <Provider store={store}>
    <ToDoApp />      
  </Provider>
);

export default Root;