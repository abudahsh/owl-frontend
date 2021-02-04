import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as E from 'react-dom/experimental';

const root = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.unstable_createRoot(document.getElementById('root')!).render(root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
