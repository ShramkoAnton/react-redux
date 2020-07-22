import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'


const TodoList = (syncPosts) => {
    return (
        <ul className="ul">
            { syncPosts.todos.map((todo, index) => {
                return <TodoItem 
                todo={todo} 
                key={todo.id} 
                index={index} 
                onChange={syncPosts.onToggle}
                removeTodo={syncPosts.removeTodo}
                editTodo={syncPosts.editTodo}
                />
            }) }
        </ul>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        syncPosts: state.todos.todos
    }
}

export default connect(mapStateToProps, null)(TodoList)
