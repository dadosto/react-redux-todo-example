import Constants from '../Constants.js';

const SetVisibilityFilterAction = (filter) => {
  return {
    type: Constants.visibilityFilterAction,
    filter: filter
  };
};

export default SetVisibilityFilterAction;