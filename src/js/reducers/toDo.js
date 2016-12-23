import Constants from '../Constants.js';

const toDo = (state = [], action) => {

  switch (action.type) {
    
    case Constants.addToDoAction: {
      return state.concat(action.toDo);
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
      
      console.log('Returning new state: ', newState);
      return newState;
    };

    default: return state;  
  }
  
};

export default toDo;