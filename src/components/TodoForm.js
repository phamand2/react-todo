import { Button,Grid, makeStyles } from '@material-ui/core';
import React, {useState} from 'react'
import { v4 as uuid_v4 } from "uuid";

function TodoForm(props) {
  const [input, setInput] = useState('')
  const classes = useStyles();

  

  // Edit in the input box
  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: uuid_v4(),
      text: input
    });

    // Empty the input box after submit
    setInput('')
  }

  return (
    <Grid container justify='center' alignItems='center' direction='column'>
      <form className={classes.root +' todo-form'} onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a todo' value={input} name='text' className='todo-input' onChange={handleChange}/>
        <Button variant='contained' color='primary' type='submit' className='todo-button'>Add todo</Button>
      </form>
    </Grid>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '0 auto',
      width: '150px',
      padding: '8px', 
    },
  },
}));


export default TodoForm
