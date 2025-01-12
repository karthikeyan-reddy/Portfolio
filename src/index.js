import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Todo from './Todo';
import PortFolio from './PortFolio';
import logo from './assets/Photos/logo.png';
import 'bootstrap/dist/js/bootstrap.min.js';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div style={{ borderRadius: '10px', height: '100px', width: '98%', margin: '0% 1%' }} className="navbar">
      <img src={logo} alt="Mkr Logo" style={{ borderRadius: '10%', float: 'left', width: '5%' }} />
      <div className="navbarRoutes" style={{ padding: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/Todo">TODO</Link>
        <Link to="/Game">Tic-Tac-Toe</Link>
      </div>
    </div>
    <Router basename="/">
      <Routes>
        <Route path="/Todo" element={<Todo />} />
        <Route path="/" element={<PortFolio />} />
        <Route path="/Game" element={<App />} />
      </Routes>
    </Router>
  </>
);