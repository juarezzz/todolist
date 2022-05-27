import React, { createContext, useReducer } from 'react'
import useTodoState from '../hooks/useTodoState'
import todoReducer from '../reducers/todo.reducer'

const defaultTodos = [
    { id: 1, task: 'Mow the lawn', completed: false },
    { id: 2, task: 'Take a nap', completed: false },
]

export const TodosContext = createContext()
export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodosContext.Provider>
    )
}