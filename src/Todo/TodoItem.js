import React from 'react'

function TodoItem({todo, index, onChange, removeTodo}) {
    
    const classes = []

    if (todo.completed){
        classes.push('done')
    }

    return (
        <li className="li">
            <span className={classes.join(' ')}>
                <input className="input"
                contentEditable="false"
                type="checkbox" 
                checked={todo.completed}
                onChange={() => onChange(todo.id)}
                />
                <strong>{index+1 }</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className="rm" onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}
export default TodoItem