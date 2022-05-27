import React, { useContext } from 'react';
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';

function TodoForm() {
    const [text, handleChange, resetText] = useInputState('')
    const dispatch = useContext(DispatchContext)

    return (
        <Paper style={{
            'margin': '1rem 0',
            'padding': '0 1rem'
        }}>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch({ type: 'ADD', task: text })
                resetText()
            }}>
                <TextField value={text}
                    onChange={handleChange}
                    onSubmit={resetText}
                    fullWidth
                    margin='normal'
                    label="Add a new todo"
                    variant='standard'
                    inputProps={{ maxLength: 50 }} />
            </form>
        </Paper>
    );
}

export default TodoForm;
