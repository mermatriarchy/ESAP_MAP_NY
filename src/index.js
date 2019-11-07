import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.hydrate(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('mountNode'),
);
