import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import LandingPage from './page/LandingPage';
import Registration from './page/Registration/Registration'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Registration/>
    {/* <LandingPage/> */}
    {/* <App /> */}
  </React.StrictMode>
);
