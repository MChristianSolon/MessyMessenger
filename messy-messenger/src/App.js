import React from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Chat />
    </div>
  );
}

export default App;
