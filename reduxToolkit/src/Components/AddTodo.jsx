import React, { useState } from 'react'
import './Addtodo.css'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'


function AddTodo() {

    const [input, setInput] = useState()

    const dispatch = useDispatch()

    const onTodohandler = (e) => {

        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')

    }

  return (
    <div className="add-todo-container">
    <h2>Add Todo</h2>
    <form className="todo-form" onSubmit={onTodohandler}>
        <input
            type="text"
            placeholder="Enter your todo"
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="add-button">
            Add
        </button>
    </form>
</div>
  )
}

export default AddTodo