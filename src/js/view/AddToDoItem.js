import React, {Component} from 'react';
import Constants from '../Constants.js';

class AddToDoItem extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick () {
    console.log('this.props.nextToDoItem = ', this.props.nextToDoItem);
    this.props.addToDoItem({
      type: Constants.addToDoAction,
      toDo: {
        text: this.input.value,
        id: this.props.nextToDoItem,
        key: this.props.nextToDoItem
      }  
    })
  }
  
  render() {
    return (
      <div>
        <input 
          type="text" 
          id="toDoText" 
          ref={node => {this.input=node;}} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddToDoItem;