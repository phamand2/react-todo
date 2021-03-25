import React from 'react'
import TodoList from './components/TodoList';
import './App.css';
import {Grid } from '@material-ui/core';

function App() {
  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <TodoList /> 
  </Grid>
    
  );
}

export default App;
