import { put, takeEvery } from 'redux-saga/effects';


import * as TodoActions from './TodoAction';
import { constants } from './TodoActionsConstants';

const actions = constants.actions;
let todoId = 0;

function* addTodo( action ) {
  yield put( { type: actions.ADD_TODO, text: action.text, id: todoId++ } );
}

export function* watchAddTodo() {
  yield takeEvery( actions.ADD_TODO_NEW, addTodo );
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield watchAddTodo();
}
