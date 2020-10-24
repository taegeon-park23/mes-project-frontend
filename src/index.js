import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import './index.css';
import App from './App';
import counterApp from './reducers';

const store = createStore(counterApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const appElement = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store = {store}>
      <App/>
    </Provider>,
    appElement
  );
};
render();