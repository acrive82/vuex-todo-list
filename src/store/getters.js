
const getters = {
    todos: (state) => {
        return state.todos
    },
    completedTodos: (state) => {
        return state.todos.filter((todo) => todo.done)
    },
    pendingTodos: (state) => {
        return state.todos.filter((todo) => !todo.done)
    }
}

export default getters
