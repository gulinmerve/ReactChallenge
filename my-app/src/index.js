import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li> Bacon</li>
      <li> Pizza </li>
      <li> Hamburger</li>
    </ul>
  </div>,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    <App />
//   </React.StrictMode>
// );
// reportWebVitals();
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


