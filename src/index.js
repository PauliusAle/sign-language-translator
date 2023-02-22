import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContext from './context/AppContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//App.js file wrapped in AppContext to use global state in the whole system.
root.render(
  <React.StrictMode>
    <AppContext> 
      <App />
    </AppContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
