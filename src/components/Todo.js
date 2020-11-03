import React, {useState} from 'react'


// Deconstruct the functions/variable
function Todo({todos, completeTodo, removeTodo}) {

  const [remove, setRemove] = useState({
    id: null,
    value: ''
  })




  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <button onClick={()=> removeTodo(todo.id)}>Remove</button>
      </div>

    </div>
  ))
}

export default Todo
