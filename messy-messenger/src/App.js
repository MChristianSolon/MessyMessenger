import React from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Router>
        <Route component={LoginPage} path="/" />
        <Route component={Chat} path="/chat" />
      </Router>
    </div>
  );
}

export default App;
