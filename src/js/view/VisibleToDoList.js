import React, {Component} from 'react';
import Constants from '../Constants.js';
import ToDoItems from './ToDoItems.js';
import {connect} from 'react-redux';
import ToggleToDoAction from '../actionCreators/toggleToDoActionCreator.js';

const getVisibleToDoItems = (toDoItems, visibilityFilter) => {

    switch (visibilityFilter) {
      case Constants.getAllVisibilityFilter:
        return toDoItems;
      case Constants.getActiveVisibilityFilter:
        return toDoItems.filter((item) => {
          return !item.completed;
        });
      case Constants.getCompletedVisibilityFilter:
        return toDoItems.filter((item) => {
          return item.completed;
        });
    }
};

const mapStateToProps = (state) => ({
  toDoItems: getVisibleToDoItems(
    state.toDoItems,
    state.visibilityFilter
  )
});

const mapDispatchToProps = (dispatch) => ({
  onToDoItemClick(id) {
    dispatch(ToggleToDoAction(id));
  }
});

const VisibleToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoItems);

export default VisibleToDoList;