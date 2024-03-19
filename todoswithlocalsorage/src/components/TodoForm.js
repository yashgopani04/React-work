import React, { useState } from 'react'
import './TodoForm.css'
import { useTodo } from '../contexts'

function TodoForm() {

  const [todo, setTodos] = useState('')

  const {addTodo} = useTodo()

  const addtodos = (e) => {

    e.preventDefault()

    if(!todo) return

    addTodo({todo, completed  : false})
    setTodos('')

  }

  return (
    <form className="todo-form" onSubmit={addtodos}>
    <input
        type="text"
        placeholder="Write Todo..."
        className="todo-input"
        value={todo}
        onChange={(e) => setTodos(e.target.value)}
    />
    <button type="submit" className="todo-button">
        Add
    </button>
</form>

  )
}

export default TodoForm