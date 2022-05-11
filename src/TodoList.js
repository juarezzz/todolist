import React from 'react';
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import Todo from './Todo';

function TodoList(props) {
    return (
        <Paper elevation={0}>
            {props.todos.length
                ?
                <List>
                    {props.todos.map((todo, i) => (
                        <>
                            <Todo
                                task={todo.task}
                                completed={todo.completed}
                                todoId={todo.id}
                                createdAt={todo.createdAt}
                                key={todo.id}
                                deleteTodo={props.deleteTodo}
                                toggleTodo={props.toggleTodo}
                                editTodo={props.editTodo}
                            />
                            {i < props.todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
                :
                null
            }
        </Paper>
    );
}

export default TodoList;
