import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';
import useLocalStorageState from './hooks/useLocalStorageState';

function TodoApp() {
    const [initialTodos] = useLocalStorageState('todos', [])
    const { todos, addTodo, deleteTodo, editTodo, toggleTodo } = useTodoState(initialTodos)

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <Paper
            style={{
                'padding': '0px',
                'margin': '0px',
                'height': '100vh',
                'backgroundColor': '#fafafa'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ 'height': '64px' }}>
                <Toolbar>
                    <Typography color="inherit">
                        <h1>TODOS</h1>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center' style={{ 'marginTop': '10px' }}>
                <Grid item xs={11} md={8} lg={6}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;
