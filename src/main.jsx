import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store';

import { ConnectFourApp } from './ConnectFourApp';
import './styles/index.css';
import './styles/queries.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectFourApp />
    </Provider>
  </React.StrictMode>
)
