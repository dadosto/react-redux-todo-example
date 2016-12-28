import React, {Component} from 'react';
import Constants from '../Constants.js';
import LinkComponent from './LinkComponent.js';
import {connect} from 'react-redux';
import SetVisibilityFilterAction from '../actionCreators/setVisibilityFilterActionCreator.js';

// ownProps = container component's own props
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
}
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(SetVisibilityFilterAction(ownProps.filter));
  }
});

const VisibilityFilterComp = connect(mapStateToProps, mapDispatchToProps)(LinkComponent);

export default VisibilityFilterComp;