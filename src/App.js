import React from 'react';
import './App.css';
import StandardList from './Components/StandardList'


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Toddle Task</h1>
      </header>
      <StandardList />
    </div>
  );
}

export default App;
