import React from 'react';
import TextField from '@mui/material/TextField'
import useInputState from './hooks/useInputState'

function EditTodoForm({ task, editTodo, todoId, toggleEditForm }) {
    const [text, handleChange] = useInputState(task);

    return (
        <form
            onSubmit={evt => {
                evt.preventDefault()
                editTodo(todoId, text)
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