import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './components/app';
//import style from './components/style/style.css'
ReactDOM.render(
  <Provider store={ store } key='provider'>
    <App />
  </Provider>,
  document.getElementById( 'app' )
);