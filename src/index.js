import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import './app.css';
import { DB_INIT, DB_TRANSACTION, REQUEST } from './js/indexedDb';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
