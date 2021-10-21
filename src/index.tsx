import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log(process.env.REACT_APP_ENV)
// Start the mocking conditionally.
if (process.env.REACT_APP_ENV === 'test') {
  const { worker } = require('./msw-mock/browser')
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
