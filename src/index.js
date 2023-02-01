import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyState from './context/MyState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyState>
    <App />
  </MyState>
);

