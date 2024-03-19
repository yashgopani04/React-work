import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoIteams({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleTodo} = useTodo();

    const editTodo = () =>{

        updateTodo(todo.id, {...todo, todo : todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () =>{

        toggleTodo(todo.id)

    }

return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    <input

        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}

    />
    <input
        type="text"
        className={`todo-text ${isTodoEditable ? 'editable' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
    />
    <button
        className="todo-button edit-button"
        onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
                editTodo();
            } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
    >
        {isTodoEditable ? '📁' : '✏️'}
    </button>
    <button
        className="todo-button delete-button"
        onClick={() => deleteTodo(todo.id)}
    >
        ❌
    </button>
</div>
  )
}

export default TodoIteams