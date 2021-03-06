import React, { useContext, memo } from "react"
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import Checkbox from '@mui/material/Checkbox'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import { DispatchContext } from "./contexts/todos.context"

function Todo({ todoId, task, completed, createdAt }) {
    const [isEditing, toggle] = useToggleState(false)
    const dispatch = useContext(DispatchContext)
    return (
        <ListItem
            style={{
                height: '64px'
            }}
        >
            {
                isEditing
                    ?
                    <>
                        <EditTodoForm
                            task={task}
                            todoId={todoId}
                            toggleEditForm={toggle}
                        />
                        <ListItemSecondaryAction>
                            <IconButton onClick={toggle}>
                                <CancelIcon aria-label="cancel" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                    :
                    <>
                        <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: 'TOGGLE', todoId: todoId })} />
                        <ListItemText
                            primary={<Typography
                                style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                                {task}
                            </Typography>}
                            secondary={`Created at ${createdAt}`}>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => dispatch({ type: 'DELETE', todoId: todoId })}>
                                <DeleteIcon aria-label="delete" />
                            </IconButton>
                            <IconButton onClick={toggle}>
                                <EditIcon aria-label="edit" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
            }
        </ListItem >

    )
}

export default memo(Todo);