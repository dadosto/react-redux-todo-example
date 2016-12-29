import React, {Component} from 'react';
import Constants from '../Constants.js';
import {Link} from 'react-router';

const FilterLink = ({filter, children}) => (
  <span style={{margin:"10px"}}>
    <Link 
      to={filter === Constants.getAllVisibilityFilter ? '' : filter} 
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
    {children}
    </Link>
  </span>
  // Basically, if the filter is the 'Show All' filter, then the url shall be '/', else, it will be '/active' or '/completed';
);

export default FilterLink;