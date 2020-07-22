import React, {useState} from "react"
import { connect } from 'react-redux'
import { createTodo } from '../redux/actions'

function AddTodo({onCreate}) {

    const [value, setValue] = useState('')
    
    function submitHandler(event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    const [title, setTitle] = useState('')

    const newTodo = {
        title, id:Date.now().toString()
    }

    createTodo(newTodo)
    return(
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input 
            value={value} 
            onChange={event => setValue(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

const mapDispatchToProps = {
    createTodo: createTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)