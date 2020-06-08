import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid'

function App() {
  return (
    <div className="App">
      <h1>Grid for the Game of Life</h1>
      <Grid />
      <button>Start</button>

    </div>
  );
}

export default App;
