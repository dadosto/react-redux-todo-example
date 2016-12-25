import React, {Component} from 'react';
import Constants from '../Constants.js';

export default class VisibilityFilterComp extends Component {
  
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  
  onClickHandler(event) {
    event.preventDefault();
    this.props.setFilter({
      type: Constants.visibilityFilterAction,
      filter: this.props.filter
    });
  }
  
  render() {
    let linkStyle = {
      fontSize: '16px',
      paddingRight: '6px', 
      textDecoration: this.props.currentFilter === this.props.filter ? 'none' : 'underline',
      color: this.props.currentFilter === this.props.filter ? '#333' : '#69b'
    };
    return (
      <span>
        <a href="#" onClick={this.onClickHandler} style={linkStyle}> { this.props.text } </a>
      </span>
    )
  }
}