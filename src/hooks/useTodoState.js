import useLocalStorageState from "./useLocalStorageState"
import { v4 as uuid } from "uuid"

const dateToString = date => {
    let [hour, minute, month, day] = [date.getHours(), date.getMinutes(), date.getMonth() + 1, date.getDate()]
    const pastNoon = hour > 12
    if (pastNoon) {
        hour = hour - 12
    }
    return `${month}/${day} ${hour}:${minute < 10 ? '0' : ''}${minute}${pastNoon ? 'PM' : 'AM'}`
}

const useTodoState = initialTodos => {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos)

    return {
        todos
        ,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false, createdAt: dateToString(new Date()) }])
        }
        ,
        deleteTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId)
            setTodos(updatedTodos)
        }
        ,
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
            setTodos(updatedTodos)
        }
        ,
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : todo
            )
            setTodos(updatedTodos)
        }
    }
}

export default useTodoState