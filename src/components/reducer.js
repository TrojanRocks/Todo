import _ from 'lodash';

import { constants } from './TodoActionsConstants';

const actions = constants.actions;

const initialState = {
  visibilityFilter: constants.SHOW_ALL,
  todos: []
};

function onToggleTodo( state = {}, action ) {
  if ( state.id !== action.id ) {
    return state;
  }

  return Object.assign( {}, state, {
    completed: !state.completed
  } );
}

export default function toDoReducer( state = initialState, action ) {
  const newState = _.assign( {}, state );
  switch ( action.type ) {
    case actions.ADD_TODO:
      newState.todos = [
        ...newState.todos,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      return newState;
    case actions.TOGGLE_TODO:
      newState.todos = _.map( newState.todos, t => onToggleTodo( t, action ) );
      return newState;
    case actions.SET_INITIAL_TODO:
      newState.todos = action.todos;
      return newState;
    default:
      return newState;
  }
}
