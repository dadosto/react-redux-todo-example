import Constants from '../Constants.js';

const todo = (state, action) => {
    switch (action.type) {
        case Constants.addToDoAction:
            return {
                id       : action.id,
                text     : action.text,
                completed: false
            };
        case Constants.toggleToDoAction:
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case Constants.addToDoAction:
            return [
                ...state,
                todo(undefined, action)
            ];
        case Constants.toggleToDoAction:
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

export default todos;

/*const toDo = (state = [], action) => {

  switch (action.type) {
    
    case Constants.addToDoAction: {
      let newItem = Object.assign({}, action.toDo);
      newItem.completed = false;
      return state.concat(newItem);
    };
      
    case Constants.toggleToDoAction: {

      let newState = state.map((toDo) => {

        if (toDo.id === action.toDo.id) {
          let updatedToDo = Object.assign({}, toDo);
          updatedToDo.completed = !updatedToDo.completed;
          return updatedToDo;
        } 
        
        return toDo;
      });
      
      return newState;
    };

    default: return state;  
  }
  
};*/

