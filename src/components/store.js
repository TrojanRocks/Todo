import { createStore, applyMiddleware } from 'redux';
import toDoReducer from './reducer';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore( toDoReducer, applyMiddleware( sagaMiddleware ) );

sagaMiddleware.run( rootSaga );

export default store;