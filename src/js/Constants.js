const ACTION_ADD_TODO = 'ADD_TODO';
const ACTION_TOGGLE_TODO ='TOGGLE_TODO';
const ACTION_SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const VISIBILITY_FILTER_SHOW_ALL = 'SHOW_ALL';
const VISIBILITY_FILTER_SHOW_COMPLETED = 'SHOW_COMPLETED';
const VISIBILITY_FILTER_SHOW_ACTIVE = 'SHOW_ACTIVE';

export default class Constants {
  
  static get addToDoAction() {
    return ACTION_ADD_TODO;
  }
  
  static get toggleToDoAction() {
    return ACTION_TOGGLE_TODO;
  }
  
  static get visibilityFilterAction() {
    return ACTION_SET_VISIBILITY_FILTER;
  }
  
  static get getActiveVisibilityFilter() {
    return VISIBILITY_FILTER_SHOW_ACTIVE;
  }
  
  static get getCompletedVisibilityFilter() {
    return VISIBILITY_FILTER_SHOW_COMPLETED;
  }
  
  static get getAllVisibilityFilter() {
    return VISIBILITY_FILTER_SHOW_ALL;
  }
  
};