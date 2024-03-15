import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import './Styles/App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
