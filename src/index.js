import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'antd/dist/antd.css';
import App from './App';
import {  ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import rootReducer from './reducer';
import {persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const store = createStore(rootReducer,composeWithDevTools())
const persistor = persistStore(store)
ReactDOM.render(
  <Provider store={store}>
    <ToastContainer/>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>   
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);



