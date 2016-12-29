import ToDoApp from './ToDoApp.js';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

// the 'filter' param will be available in a special params prop
const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/(:filter)' component={ToDoApp} />
    </Router>    
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Root;