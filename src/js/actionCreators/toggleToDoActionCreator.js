import Constants from '../Constants.js';

const ToggleToDoAction = (id) => ({ 
  type: Constants.toggleToDoAction,
  id: id
});

export default ToggleToDoAction;