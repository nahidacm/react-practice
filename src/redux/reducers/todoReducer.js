import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'ADD_TODO':
        return { ...state, todos: [...state.todos, {text: payload.text, key: uuidv4(), status: 'todo'}] }
    case 'MARK_AS_DONE':
        let selectedTaskIndex = state.todos.findIndex(({key})=> key === payload.key)
        state.todos[selectedTaskIndex].status = 'done'
        return state
    default:
        return state
    }
}

export default todoReducer