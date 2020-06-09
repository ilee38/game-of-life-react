import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid/Grid'

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Grid msg={"The Game of Life"}/>
      <button>Start</button>

    </div>
  );
}

export default App;
