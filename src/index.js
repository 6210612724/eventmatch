import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import Map_show  from './Map/Longdo_Show';
import CreateActivity from './pages/CreateActivity/CreateActivity';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes >         
          <Route path="/" element={<Welcome />} />      
          <Route path="/home" element={<Home/>} />  
          <Route path="/createactivity" element={<CreateActivity/>} /> 
          <Route path="/map" element={<Map_show/>} /> 
                 
      </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
