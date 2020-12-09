import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore, history } from './store';

export const store = configureStore();

ReactDOM.render(
  <React.Fragment>
    <App store={store} history={history} />
  </React.Fragment>,
  document.getElementById('root')
);
