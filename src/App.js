import React,{useState} from 'react';
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo';

function App() {

  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: 'buy bread'},
    {id:2, completed: false, title: 'buy oil'},
    {id:3, completed: false, title: 'buy milk'}
  ]);
  const [rewrite, setRewrite] = useState();

  function rewriteTodo(id) {
    setRewrite(
      todos.map(todo => {
        if (todo.id === id) {
          todo.contentEditable = !todo.contentEditable;
        }
        return todos
      })
    )
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        
      }
      return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed:false
        }
      ])
    )
  }

  return (
      <div className="wrapper">
        <h1>Todo list))</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} removeTodo={removeTodo} rewriteTodo={rewriteTodo}/> : <p>no todos!</p>}
        
      </div>
  )
}

export default App;
