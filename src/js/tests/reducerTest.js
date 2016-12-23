import Constants from '../Constants.js';
import toDo from '../reducers/toDo.js';
import visibilityFilter from '../reducers/visibilityFilter.js';
import toDoApp from '../reducers/toDoApp.js';
import deepFreeze from 'deep-freeze';
import expect from 'expect';

let addNewToDoTest = () => {
  
  let stateBefore = [
    {
      id: 0,
      text: 'Item 1',
      completed: false
    }
  ];
  
  let newItem = {
    id: 1,
    text: 'Item 2',
    completed: false
  };
  
  let expectedStateAfter = stateBefore.concat(newItem);
  
  let addNewItemAction = {
    type: Constants.addToDoAction,
    toDo: newItem
  }
  
  deepFreeze(stateBefore);
  deepFreeze(addNewItemAction);
  
  expect(toDo(stateBefore, addNewItemAction))
    .toEqual(expectedStateAfter);
  
  console.log('addNewToDoTest test passed');
  
};

let toggleToDoTest = () => {
  
  let stateBefore =   [{id: 0, text: 'Item 1', completed: false }, {id: 1, text: 'Item 2', completed: false }];
  let expStateAfter = [{id: 0, text: 'Item 1', completed: true },  {id: 1, text: 'Item 2', completed: false }];
  
  let toggleToDoAction = {
    type: Constants.toggleToDoAction,
    toDo: {
      id: 0
    }
  };
  
  deepFreeze(stateBefore, toggleToDoAction);
  deepFreeze(stateBefore);
  deepFreeze(toggleToDoAction);

  expect(toDo(stateBefore, toggleToDoAction))
    .toEqual(expStateAfter);
  
  console.log('toggleToDoTest test passed');
};

let setVisibilityToActiveTest = () => {
  
  let stateBefore = {};
  let expectedStateAfter = Constants.getActiveVisibilityFilter;
  
  let setVisibilityToActiveAction = {
    type: Constants.visibilityFilterAction,
    filter: Constants.getActiveVisibilityFilter
  }
  
  deepFreeze(stateBefore);
  deepFreeze(setVisibilityToActiveAction);
  
  expect(visibilityFilter(stateBefore, setVisibilityToActiveAction))
    .toEqual(expectedStateAfter);
  
  console.log('setVisibilityToActiveTest test passed');  
};

let setDefaultVisibilityTest = () => {
  
  let expectedStateAfter = Constants.getAllVisibilityFilter;
  
  let setDefaultVisibility = {
    type: 'NON_EXISTING'
  }
  
  deepFreeze(setDefaultVisibility);
  
  expect(visibilityFilter(undefined, setDefaultVisibility))
    .toEqual(expectedStateAfter);
  
  console.log('setDefaultVisibilityTest test passed');  
};

let toDoAppReducerTests = () => {
  
  let stateBefore = {
    toDoItems: [{id: 0, text: 'Item 1', completed: false }, {id: 1, text: 'Item 2', completed: false }]
  };
  
  let newItem = {id: 2, text: 'Item 3', completed: false }
  
  let expectedStateAfterNewItem = {
    toDoItems: stateBefore.toDoItems.concat(newItem),
    visibilityFilter: Constants.getAllVisibilityFilter
  };
  
  let addNewItemAction = {
    type: Constants.addToDoAction,
    toDo: newItem
  };
  
  deepFreeze(stateBefore);
  
  expect(toDoApp(stateBefore, addNewItemAction))
    .toEqual(expectedStateAfterNewItem);
  
  console.log('toDoAppReducerTests test passed'); 
}

const ReducerTests = () => {

  addNewToDoTest();
  toggleToDoTest();
  setVisibilityToActiveTest();
  setDefaultVisibilityTest();
  toDoAppReducerTests();
  
  console.log('ALL tests passed!');
};

export default ReducerTests;