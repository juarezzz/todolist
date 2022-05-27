import { v4 as uuid } from "uuid"
import dateToString from "../utils/dateToString"


const reducer = (todos, action) => {
    switch (action.type) {
        case "ADD":
            return [...todos, { id: uuid(), task: action.task, completed: false, createdAt: dateToString(new Date()) }]
        case "DELETE":
            return todos.filter(todo => todo.id !== action.todoId)
        case "TOGGLE":
            return todos.map(todo =>
                todo.id === action.todoId ? { ...todo, completed: !todo.completed } : todo
            )
        case "EDIT":
            return todos.map(todo =>
                todo.id === action.todoId ? { ...todo, task: action.task } : todo
            )
        default:
            return todos
    }
}

export default reducer