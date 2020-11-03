import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  // set the state to an empty array
  const [todos, setTodos] = useState([])


  // Check to make sure user is not submitting an empty text
  const addTodo = (todo) => {
    if(!todo.text){
      return
    }
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    console.log(todo, ...todos)
  }

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text){
      return
    }

    setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id){
        // Toggle between true and false
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  // Remove a task
  const removeTodo = (id) => {
    // create a new array from the spread operator todos to filter out if the id is not in the array.
    const removeList = todos.filter(todo=>todo.id !== id)

    setTodos(removeList)
  }



  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm onSubmit={addTodo}/>
      <h1>My Task</h1>
      <Todo 
      todos={todos} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo} 
      updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList
