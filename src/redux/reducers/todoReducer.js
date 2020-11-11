import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'ADD_TODO':
        return { ...state, todos: [...state.todos, {text: payload.text, key: uuidv4(), complete: 0}] }
    case 'MARK_AS_DONE':
        let selectedTaskIndex = state.todos.findIndex(({key})=> key === payload.key)
        let todosCopy = [...state.todos]
        todosCopy[selectedTaskIndex] = {...todosCopy[selectedTaskIndex], complete: !todosCopy[selectedTaskIndex].complete}

        return { ...state, todos: todosCopy}
    default:
        return state
    }
}

export default todoReducer