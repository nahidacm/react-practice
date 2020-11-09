const initialState = {
    counterIndex: 0
}

const counter =  (state = initialState, { type, payload }) => {
    switch (type) {

    case 'INCREMENT':
        return { ...state, counterIndex: state.counterIndex + payload.incrementBy }
    case 'DECREMENT':
        return { ...state, counterIndex: state.counterIndex - 1 }

    default:
        return state
    }
}

export default counter;