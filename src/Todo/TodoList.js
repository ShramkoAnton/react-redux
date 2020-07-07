import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList(props) {
    return (
        <ul className="ul">
            { props.todos.map((todo, index) => {
                return <TodoItem 
                todo={todo} 
                key={todo.id} 
                index={index} 
                onChange={props.onToggle}
                removeTodo={props.removeTodo}
                />
            }) }
        </ul>
    )
}
