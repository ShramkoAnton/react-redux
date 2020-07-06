import React from 'react';
import './App.css';

let arr = [];

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h2>ToDo list</h2>
        <input className="input" type="text" placeholder="write here"/>
        <button>Add</button>
      </div>
    </React.Fragment>
  );
}

export default App;
