import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './contexts/todos.context';

function TodoApp() {
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
                    <Typography component='h1' variant='h4' color="inherit">
                        TODOS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center' style={{ 'marginTop': '10px' }}>
                <Grid item xs={11} md={8} lg={6}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;
