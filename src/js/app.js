import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Constants from './Constants.js';
import ReducerTests from './tests/reducerTest.js';
import configureStore from './configureStore.js';
import Root from './view/Root.js';
//ReducerTests();

const store = configureStore();
console.log('Store: ', store);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);