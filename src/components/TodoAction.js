import { constants } from './TodoActionsConstants';

function addToDo( textValue ) {
  return {
    type: constants.actions.ADD_TODO_NEW,
    text: textValue
  };
}

function todoClicked( todoId ) {
  return {
    type: constants.actions.TOGGLE_TODO,
    id: todoId
  };
}


export { addToDo, todoClicked };