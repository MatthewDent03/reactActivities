import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const rows = [];
// for(let i = 0; i < 10; i++){
//   rows.push(<li key={i}>{i}</li>);
// }


root.render(
  <StrictMode>
  <App />
  </StrictMode>
);

