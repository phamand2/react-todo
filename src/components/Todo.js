import React, { useState } from 'react'
import TodoForm from './TodoForm'


// Deconstruct the functions/variable
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }

  return todos.map((todo, index) => (
  <>

    <ul>
      <li>

        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
          <div key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>Edit</button>
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
          </div>
        </div>

      </li>
    </ul>

  </>
  ))
}

export default Todo
