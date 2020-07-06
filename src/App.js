import React from 'react';
import './App.css';

let todos = [];

class NewTodos extends React.Component {
  render() {
    const newsTemplate = this.props.data.map(function(item, index) {
      return (
        <div key={index}>
          <p className="news__author">{todos.value}</p>
        </div>
      )
    })
    return (
      <div className="news">
        {newsTemplate}
      </div>
    )
  }
}

function addTodos() {
  todos.push(document.querySelector('input'))
}

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h2>ToDo list</h2>
        <input className="input" type="text" placeholder="write here"/>
        <button onClick={addTodos}>Add</button>
      </div>
      <NewTodos data={todos}/>
    </React.Fragment>
  );
}

export default App;
