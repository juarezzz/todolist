import React, { useContext } from 'react';
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';

function TodoList() {
    const { todos } = useContext(TodosContext)

    return (
        <Paper elevation={0}>
            {todos.length
                ?
                <List>
                    {todos.map((todo, i) => (
                        <React.Fragment key={todo.id}>
                            <Todo
                                task={todo.task}
                                completed={todo.completed}
                                todoId={todo.id}
                                createdAt={todo.createdAt}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
                :
                null
            }
        </Paper>
    );
}

export default TodoList;
