import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

import { Provider } from 'react-redux';
import generateStore from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

//Redux store
const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);