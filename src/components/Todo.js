import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import TodoForm from "./TodoForm";

// Deconstruct the functions/variable
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  const toDoList = todos.map((todo, index) => {
    return (
      <Grid>
        <Grid
          item
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <Grid
            direction="row"
            container
            justify="space-around"
            alignItems="center"
          >
            <p style={{fontSize: 24}}>{todo.text}</p>
            <Grid item container direction="row" justify="space-around">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeTodo(todo.id)}
              >
                Remove
              </Button>
              <Button
                variant="contained"
                color="default"
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => completeTodo(todo.id)}
              >
                Complete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {toDoList}
    </Grid>
  );
}

export default Todo;
