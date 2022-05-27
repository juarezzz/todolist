import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer.js";
import todoReducer from "../reducers/todo.reducer.js";

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer('todos', [], todoReducer);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}