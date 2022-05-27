import React, { useContext } from 'react';
import TextField from '@mui/material/TextField'
import useInputState from './hooks/useInputState'
import { DispatchContext } from './contexts/todos.context';

function EditTodoForm({ task, todoId, toggleEditForm }) {
    const [text, handleChange] = useInputState(task);
    const dispatch = useContext(DispatchContext)

    return (
        <form
            onSubmit={evt => {
                evt.preventDefault()
                dispatch({ type: "EDIT", todoId: todoId, task: text })
                toggleEditForm()
            }}
            style={{
                margin: '0 1rem',
                width: '90%'
            }}
        >
            <TextField
                margin='normal'
                variant='standard'
                fullWidth
                value={text}
                onChange={handleChange}
                autoFocus
                inputProps={{ maxLength: 50 }}
            />
        </form>
    );
}

export default EditTodoForm;