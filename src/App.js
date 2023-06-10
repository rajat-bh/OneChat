import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chats from './pages/Chats/Chats';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
