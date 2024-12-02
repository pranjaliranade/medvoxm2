import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import News from './pages/News';*/
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <div className="main-content">

      </div>
    </>
    
  );
}

export default App;
