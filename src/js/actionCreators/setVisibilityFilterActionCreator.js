import Constants from '../Constants.js';

const SetVisibilityFilterAction = (filter) => ({
  type: Constants.visibilityFilterAction,
  filter: filter
});

export default SetVisibilityFilterAction;