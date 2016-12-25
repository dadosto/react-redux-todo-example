import Constants from '../Constants.js';

const visibilityFilter = (state = Constants.getAllVisibilityFilter, action) => {

  switch (action.type) {
    case Constants.visibilityFilterAction: {
      return action.filter;
    };
    break;
    default:
      return state;
  }
};

export default visibilityFilter;